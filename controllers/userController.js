// Donn ées isol ées dans le contr ô leur (en mé moire pour cette sé ance )
let users = [
{ id: 1 , name : 'Aymen ' , email : 'aymen@gmail.com' , role : 'admin' } ,
{ id: 2 , name : 'Lina ' , email : 'lina@gmail.com' , role : 'user' } ,
];

const getAllUsers = (req , res) => {
const { role } = req. query ;
let resultat = users ;
if ( role ) {
resultat = users . filter (u => u. role === role ) ;
}
res . status (200) . json ({ total : resultat . length , users : resultat }) ;
};

const getUserById = (req , res) => {
const id = Number ( req. params .id) ;
const user = users . find (u => u.id === id) ;
if (! user ) {
return res. status (404) . json ({ error : 'User ${id} introuvable ' }) ;
}
res . status (200) . json ( user ) ;
};
let prochainId = 3;
const createUser = (req , res) => {
const { name , email } = req. body ;
const newUser = {
id: prochainId++ ,
name ,
email ,
role: 'user'
} ;
users . push (newUser) ;
res . status (201) . json ({ message : 'User cree avec sucees ', user : newUser }) ;
};

const deleteUser = (req , res) => {
const id = Number ( req. params .id) ;
const userExiste = users . some (u => u.id === id) ;
if (! userExiste ) {
return res. status (404) . json ({ error : 'Impossible de supprimer : user ${id} introuvable ' }) ;
}
users = users . filter (u => u.id !== id) ;
res . status (200) . json ({ message : 'User ${id} supprim é avec succ ès' }) ;
};



// Exportation CommonJS : on rend ces fonctions publiques
module . exports = {
getAllUsers ,
getUserById ,
createUser ,
deleteUser
};
