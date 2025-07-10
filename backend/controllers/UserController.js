const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Adminusers = ['iffadmin@gmail.com','joeadmin45@gmail.com']

exports.registerUser = async (req, res) => {
  try {
    const { FirstName ,LastName, email, password} = req.body;

    
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({ FirstName ,LastName, email, password: hashedPassword,role:'user' });
    await user.save();

    const PAYLOAD = {
      userId: user.id,
      FirstName:user.FirstName,
      LastName: user.LastName,
      role: user.role
    }

    const token = jwt.sign(PAYLOAD,process.env.JWT_SECRET,{expiresIn:'7d'})

    res.cookie('user_token',token,{
      httpOnly: true,
      sameSite: 'Lax',
      secure: 'False',
      maxAge: 7 * 24 * 60 * 60 * 1000
    })
    res.status(201).json({ message: 'User registered successfully', userId: user._id, user : {FirstName: user.FirstName, LastName: user.LastName, email: user.email , role: user.role}});

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.registerAdmin = async (req,res) => {
  try {
    const {FirstName, LastName, email,password} = req.body

    const user = await User.findOne({email})
    
    if (user){
      return res.status(400).send('Admin already exists!')
    }

    const hashedPassword =await bcrypt.hash(password,10)
    const newAdmin = await User.create({FirstName, LastName, email, password:hashedPassword, role: 'admin'})

    
    const PAYLOAD = {userId: newAdmin._id,FirstName: newAdmin.FirstName, LastName: newAdmin.LastName, email: newAdmin.email, role: newAdmin.role}
    
    const token = jwt.sign(PAYLOAD, process.env.JWT_SECRET, {expiresIn: '7d'})
    
    res.cookie('admin_token',token, {
      httpOnly: true,
      secure: false, 
      sameSite:'Lax',
      maxAge:  7 * 24 * 60 * 60 * 1000 
    })
    
    res.status(201).send({message: 'Admin created!', token, PAYLOAD})


  } catch (error) {
    res.status(500).send(error.message)
  }
};

exports.loginAdmin =async (req,res) => {
  try {
    const {email,password} = req.body

    const admin = await User.findOne({email})

    if (!admin){
      return res.status(400).send({messge:'User not found'})
    }

    const isPassword = await bcrypt.compare(password,admin.password)
    
    if(!isPassword){
      return res.status(400).send({message:"Invalid Password!"})
    }

    const PAYLOAD = {userId: admin._id,FirstName : admin.FirstName, LastName: admin.LastName, email: admin.email,role:admin.role}

    const token = jwt.sign(PAYLOAD,process.env.JWT_SECRET,{expiresIn:'7d'})

    res.cookie('admin_token',token,{
      httpOnly: true,
      secure: false,
      sameSite:'Lax',
      maxAge: 7 * 24 * 60 * 60 * 1000 
    })

    return res.status(200).send({message: 'Login Successful', token , PAYLOAD})
  } catch (error) {
    console.error(error); // log in terminal
return res.status(500).json({ error: error.message || 'Internal Server Error' });

  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.cookie('user_token', token, {
      httpOnly: true,
      secure: false,
      sameSite:'Lax',

      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({ message: 'Login successful', token, data: {
      email : user.email,
      FirstName : user.FirstName,
      LastName : user.LastName,
      password : user.password,
      role:user.role
    }});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Logout user
exports.logoutUser = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out successfully' });
};

// Protected route example
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    
    if(!user){
      res.status(400).send({message: 'User not found!'})
    }
    res.status(200).json({message:'Welcome to User Profile', user });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAdminProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    
    if(!user){
      return res.status(400).send({message: 'Admin not found!'})
    }
    return res.status(200).json({message:'Welcome to Admin Profile', user });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

