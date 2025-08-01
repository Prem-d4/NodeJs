const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// Middlewares
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    console.log('Hello from the middleware');
    next();
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

// const port = 3000;

// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: 'Hello from the server!'
//     });
// });

// app.post('/', (req, res) => {
//     res.status(201).json({  
//         message:'you can post to this endpoint'
//     });
// });

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/data/tours-simple.json`,'utf-8'));

// Route handlers
// const getAllTours = (req, res) => {
//     console.log(req.requestTime);
//     res.status(200).json({
//         status:'success',
//         requestedAt:req.requestTime,
//         message:'Tours list fetched successfully',
//         data:{
//             tours
//         },
//         result:tours.length
//     })
// }

// const getTour = (req,res) => {
//     console.log(req.params)

//     const id = req.params.id * 1;
//     const tour = tours.find(tour => tour.id === id);

//     // if(id > tours.length){
//     if(!tour){
//         res.status(404).json({
//             status:'fail',
//             message:'Tour not found'
//         })
//     }

//     res.status(200).json({
//         status: 'Success',
//         message:'Tour retrieved successfully',
//         data:{
//             tour
//         }
//     })
// }

// const createTour = (req,res) =>{
//     // console.log(req.body)

//     const newId = tours[tours.length-1].id+1;
//     const newTour = Object.assign({id: newId},req.body);

//     tours.push(newTour);
//     fs.writeFile(`${__dirname}/data/tours-simple.json`,JSON.stringify(tours),(err)=>{
//         if (err) res.status(500).json({message:'Error adding new tour'});
//         res.status(201).json({
//             status:'success',
//             message:'Tour created successfully',
//             data:{
//                 tour:newTour
//             }
//         })
//     })
//     // res.send('Done')
// }

// const updateTour = (req,res) => {
//     const id = req.params.id * 1;

//     console.log(req.body);
//     if(id > tours.length){
//         res.status(404).json({
//             status:'fail',
//             message:'Tour not found'
//         })
//     }

//     res.status(200).json({
//         status:'success',
//         message:'Tour updated successfully',
//         data:{
//             tour:'<Updated tour here...>'
//         }
//     })
// }

// const deleteTour = (req, res) => {
//     const id = req.params.id * 1;

//     if(id > tours.length){
//         res.status(404).json({
//             status:'fail',
//             message:'Tour not found'
//         })
//     }

//     res.status(204).json({
//         status:'success',
//         message:'Tour deleted successfully',
//         data:null
//     })
// }

// const getAllUsers = (req, res) => {
//     res.status(500).json({
//         status:'error',
//         message:'This route is not yet defined'
//     })
// }

// const createUser = (req, res) => {
//     res.status(500).json({
//         status:'error',
//         message:'This route is not yet defined'
//     })
// }

// const getUser = (req, res) => {
//     res.status(500).json({
//         status:'error',
//         message:'This route is not yet defined'
//     })
// }

// const updateUser = (req, res) => {
//     res.status(500).json({
//         status:'error',
//         message:'This route is not yet defined'
//     })
// }

// const deleteUser = (req, res) => {
//     res.status(500).json({
//         status:'error',
//         message:'This route is not yet defined'
//     })
// }

// app.get('/api/v1/tours',getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id',deleteTour);

//Routes


// const tourRouter = express.Router();
// const userRouter = express.Router();    


// tourRouter.route('/').get(getAllTours).post(createTour);
// tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);


// userRouter.route('/').get(getAllUsers).post(createUser);
// userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

// app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//Server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

module.exports = app;

