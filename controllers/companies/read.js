let read = (req,res,next)=> res.status(200).render('index', {
    title: '/COMPANIES',
    subtitle: 'end points of authors'
})

export default read