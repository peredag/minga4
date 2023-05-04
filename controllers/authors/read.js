let read = (req,res,next)=> res.status(200).render('index', {
    title: '/AUTHORS',
    subtitle: 'end points of authors'
})

export default read

/* 
(req,res,next)=> res.status(200).send('autor leido')

*/