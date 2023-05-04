let read = (req,res,next)=> res.status(200).render('index', {
    title: '/MANGAS',
    subtitle: 'end points of authors'
})

export default read