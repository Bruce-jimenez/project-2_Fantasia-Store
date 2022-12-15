const React = require('react');

function goToArmory(){
    window.location = '/Armor';
   }
   
function goToWeaponry(){
    window.location = '/Weapons';
   }
   
function goToItemSheld(){
    window.location = '/Miscellaneous';
   }
   
   <>
   <button className="imgPlateA" onClick="goToArmory()">Armory</button>
   <button className="imgPlateW" onClick="goToWeaponry()">Weaponry</button>
   <button className="imgPlateM" onClick="goToItemSheld()">Item Shelf</button>
   </>