
function dummylike(req,res)
{
    res.send('<h1>this is your dummy route ....</h1>');
}

module.exports = {dummylike};   // Jab aap ek controller file mein {} ke sath functions ko group karte hain, toh aap ek hi module mein multiple functions aur logic ko define kar sakte hain.  Is approach ka ek aur fayda ye hai ki aapko dusre files mein import karte waqt specific functions ko choose karne mein flexibility milti hai. Aap sirf zaruratmand function ko hi import kar sakte hain, jisse code maintainable aur readable rehta hai.
