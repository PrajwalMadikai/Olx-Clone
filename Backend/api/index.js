const bcrypt = require('bcrypt');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const { User } = require('../Modal/userModal');
const session = require('express-session');
const multer = require('multer');
const Product=require('../Modal/productModal')
const path=require('path')
const Whishlist=require('../Modal/savedModal');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};
 
connectDB();

app.use(session({
secret:process.env.SESSION_ID,
resave: false,
saveUninitialized: false,
cookie: {
  httpOnly: true,                // Prevent access via JavaScript (for security)
  secure: false,                 // Set to true if using HTTPS (e.g., in production)
  maxAge: 1000 * 60 * 60 * 24,   // Session expiration: 1 day
}
}))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true  
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
   
    cb(null, 'uploads/');  
  },
  filename: (req, file, cb) => {
  
    cb(null, Date.now() + path.extname(file.originalname));  
  }
});

 
const upload = multer({ storage: storage });

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (!token) {
    console.log("Access denied. No token provided.");
    return res.status(403).json({ message: "Access denied. No token provided." });
    
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
      }
      req.user = user;
      next();
    });
     
  } catch (error) {
    console.log('token failed');
    return res.status(401).json({ message: "Invalid token." });
  }

};


app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists with this email.' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        email,
        password: hashedPassword,
      });
  
      await newUser.save();
     
      
      res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
      console.error('Error in /signup:', err);
      res.status(500).json({ message: 'An error occurred. Please try again.' });
    }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter both email and password." });
  }
  
 
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign(
      { email: user.email, userId: user._id },
      process.env.JWT_SECRET,  
      { expiresIn: "1h" } 
    );

  

    
     

     
    let existingWishlist = await Whishlist.findOne({ userId: token.userId});

    if (!existingWishlist) {
      
      const newWishlist = new Whishlist({
        userId: user._id,
        products: [], 
      });

      await newWishlist.save();
    }  

   
    res.status(200).json({ message: "Login successful!" ,token:token});
  } catch (err) {
    console.error("Error in login:", err);
    res.status(500).json({ message: "An error occurred. Please try again." });
  }
});


app.post('/add-product' , upload.single('image'), async function (req, res) {
  const { brand, year, fuel, transmission, owners, title, description, price } = req.body;
  const image = req.file ? req.file.filename : null;


  try {
    const userId =req.user.userId

     
    const newProduct = new Product({
      userId,
      brand,
      year,
      fuel,
      transmission,
      owners,
      title,
      description,
      price,
      image,
    });

 console.log('prodct data:',newProduct);
 
     
    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully!'});
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Error adding product', error });
  }
});

app.get('/products',async(req,res)=>{
  try {
    
    const products = await Product.find()
   
    
    res.status(200).json(products);

  } catch (error) {
    console.log(error);
    
  }
})
app.post('/addwhishlist',verifyToken, async (req, res) => {
  try {
    const { productId } = req.body;
  
    const user=await User.findOne({email:req.user.email})
    const newProduct = await Product.findById(productId);
    if (!newProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

     
    const productToAdd = {
      brand: newProduct.brand,
      year: newProduct.year,
      fuel: newProduct.fuel,
      transmission: newProduct.transmission,
      owners: newProduct.owners,
      title: newProduct.title,
      description: newProduct.description,
      price: newProduct.price,
      image: newProduct.image,
    };

     
    let alreadyWhistlist = await Whishlist.findOne({ userId: req.user.userId });

    if (alreadyWhistlist) {
       
      const productExists = alreadyWhistlist.products.some(
        (product) =>
          product.title === productToAdd.title && product.price === productToAdd.price
      );

      if (productExists) {
        return res.status(400).json({ message: 'Product already in wishlist' });
      }

      
      alreadyWhistlist.products.push(productToAdd);
      await alreadyWhistlist.save();
    } else {
      
      const newWishlist = new Whishlist({
        userId: req.user.userId,
        products: [productToAdd],
      });
      await newWishlist.save();
    }

    res.status(201).json({ message: 'Product added to wishlist!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding product', error });
  }
});
app.get('/whishlist',verifyToken,async(req,res)=>{
  try {
   
         let user=await User.findOne({email:req.user.email})
         
         let response=await Whishlist.findOne({userId:req.user.userId})
         res.status(201).json(response.products)

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error adding product', error })
  }

})
app.get('/logout', async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error destroying session', error: err });
      }
      res.status(201).json({ message: 'Logged out successfully' });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error in logout', error });
  }
});

app.post('/removewhishlist',verifyToken,async(req,res)=>{
    const {productId}=req.body
  try {
    let user=await User.find({email:req.user.email})
    await Whishlist.updateOne({userId:user._id},{ $pull: { products: { _id: productId } } })
    res.status(201).json({message:'item removed from whishlist'})

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Error remove whishlist', error })
  
    
  }
})

app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:3000`));
