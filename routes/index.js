
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

router.get('/services', (req, res) => {
    res.render('services', { title: 'Services' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});
router.get('/artesano', (req, res) => {
    res.render('artesano', { title: 'artesano' });
});
router.get('/amalia', (req, res) => {
    res.render('amalia', { title: 'amalia' });
});
router.get('/newrise', (req, res) => {
    res.render('newrise', { title: 'newrise' });
});
router.get('/harmony_gates_realty_privacy_policy', (req, res) => {
    res.render('harmony_gates_realty_privacy_policy', { title: 'harmony_gates_realty_privacy_policy' });
});

router.get('/blog', (req, res) => {
    res.render('blog', { title: 'Blog' });
});

router.get('/blog-details', (req, res) => {
    res.render('blog-details', { title: 'Blog-details' });
});
router.get('/interior-design', (req, res) => {
    res.render('interior-design', { title: 'Interior Design' });
});
router.get('/developments', (req, res) => {
    res.render('developments', { title: 'Developments' });
});
router.get('/properties', (req, res) => {
    res.render('properties', { title: 'Properties' });
});



router.post('/contact', (req, res) => {
    // Handle form submission
    const { name, email, message } = req.body;
    console.log(`Message from ${name} (${email}): ${message}`);
    res.redirect('/');
});

module.exports = router;
