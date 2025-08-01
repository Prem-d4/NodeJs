const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../data/tours-simple.json`,'utf-8'));

 exports.checkBody = (req, res, next) => {
    if(!req.body.name || !req.body.price){
        return res.status(400).json({
            status:'fail',
            message:'Missing name or price'
        })
    }
    next();
}
 exports.checkID = (req, res, next, val) => {
    console.log(`Tour id is: ${val}`);

    if(val * 1 > tours.length){
        return res.status(404).json({
            status:'fail',
            message:'Invalid ID'
        })
    }

    next();
}
 exports.getAllTours = (req, res) => {
    console.log(req.requestTime);
    res.status(200).json({
        status:'success',
        requestedAt:req.requestTime,
        message:'Tours list fetched successfully',
        data:{
            tours
        },
        result:tours.length
    })
}

 exports.getTour = (req,res) => {
    console.log(req.params)

    const id = req.params.id * 1;
    const tour = tours.find(tour => tour.id === id);

    // if(id > tours.length){
    // if(!tour){
    //     res.status(404).json({
    //         status:'fail',
    //         message:'Tour not found'
    //     })
    // }

    res.status(200).json({
        status: 'Success',
        message:'Tour retrieved successfully',
        data:{
            tour
        }
    })
}

 exports.createTour = (req,res) =>{
    console.log(req.body)

    const newId = tours[tours.length-1].id+1;
    const newTour = Object.assign({id: newId},req.body);

    tours.push(newTour);
    fs.writeFile(`${__dirname}/../data/tours-simple.json`,JSON.stringify(tours),(err)=>{
        if (err) res.status(500).json({message:'Error adding new tour'});
        res.status(201).json({
            status:'success',
            message:'Tour created successfully',
            data:{
                tour:newTour
            }
        })
    })
    // res.send('Done')
}

 exports.updateTour = (req,res) => {
    const id = req.params.id * 1;

    console.log(req.body);
    // if(id > tours.length){
    //     res.status(404).json({
    //         status:'fail',
    //         message:'Tour not found'
    //     })
    // }

    res.status(200).json({
        status:'success',
        message:'Tour updated successfully',
        data:{
            tour:'<Updated tour here...>'
        }
    })
}

 exports.deleteTour = (req, res) => {
    const id = req.params.id * 1;

    // if(id > tours.length){
    //     res.status(404).json({
    //         status:'fail',
    //         message:'Tour not found'
    //     })
    // }

    res.status(204).json({
        status:'success',
        message:'Tour deleted successfully',
        data:null
    })
}