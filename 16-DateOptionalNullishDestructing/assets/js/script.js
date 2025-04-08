// 1. Date obyektindən istifadə etməklə elə bir şərt yazın ki istifadəçi sayta daxil olanda daxil olduğu saata uyğun ona mesaj çıxarsın.
const date = new Date().getHours();
    let mesaj = "";
    if (date >= 6 && date < 12) {
      mesaj = "Sabahınız xeyir!";
    } else if (date >= 12 && date < 18) {
      mesaj = "Günortanız xeyir!";
    } else if (date >= 18 && date < 22) {
      mesaj = "Axshamınız xeyir!";
    } else {
      mesaj = "Gecəniz xeyir!";
    }
alert(mesaj);



// 2. Object Destructing istifadə edərək employee  obyektindən name, department və contact (email, phone, emergencyContact sahələri daxil olmaqla) məlumatlarını əldə edin. Həmçinin emergencyContact-də name və relation məlumatı əldə edin.
const employee = {
    name: "Farid Ali",
    department: "Engineering",
    contact: {
      email: "farid.ali@example.com",
      phone: "555-1234",
      emergencyContact: {
        name: "Far For",
        relation: "Spouse"
      }
    }
  };

let {
    name,
    department,
    contact : {
        email,
        phone,
        emergencyContact : {
            name: emName,
            relation
        }
    }
} = employee

console.log(`Name: "${name}"`);
console.log(`Department: "${department}"`);
console.log(`E-mail: "${email}"`);
console.log(`Phone: "${phone}"`);
console.log(`EmergencyContactName: "${emName}"`);
console.log(`EmergencyRelation: "${relation}"`);



// 3. Bu API-dən alınan məlumatları təmsil edir
const apiResponse = [
    {
      id: 1,
      title: "JavaScript əsasları",
      author: "Səid Məmmədov",
      stats: [2500, 150, 30]      
    },
    {
      id: 2,
      title: "Array Destructuring",
      author: "Leyla Əliyeva",
      stats: [1800, 220, 45]
    },
    {
      id: 3,
      title: "Müasir JavaScript",
      author: "Tural Həsənli",
      stats: [3200, 380, 70]
    }
  ];

// 3.1 Destructuring istifadə edərək ikinci məqalənin məlumatlarını çıxarın
// 3.2 stats array-ini də destructuring edin (oxunma, bəyənmə, şərhlər)
// 3.3 Aşağıdakı formatda nəticəni console-a çıxarın:
//     "Məqalə: Array Destructuring, Müəllif: Leyla Əliyeva, 1800 oxunma, 220 bəyənmə, 45 şərh"
let {
    id,
    title,
    author,
    stats: [oxunma, beyenme, serh]
  } = apiResponse[1];
  
console.log(`Məqalə: ${title}, Müəllif: ${author}, ${oxunma} oxunma, ${beyenme} bəyənmə, ${serh} şərh`);
  


// 4. Nəticə olaraq bu məlumatları qaytarın:
//    İstifadəçi adı (default: "Qonaq")
//    Profil şəkli URL (default: "/default-avatar.png")
//    Bio məlumatı (default: "Məlumat yoxdur")
//    Əlaqə emaili (default: "təyin edilməyib")
//    Premium statusu (default: false)
function renderUserProfile(userData) {
    let username = userData?.user?.username ?? "Qonaq";
    let avatar = userData?.user?.profile?.avatar ?? "/default-avatar.png";
    let bio = userData?.user?.profile?.bio ?? "Məlumat yoxdur";
    let email = userData?.user?.contact?.email ?? "təyin edilməyib";
    let premium = userData?.user?.account?.premium ?? false;
  
    return {
      username,
      avatar,
      bio,
      email,
      premium
    };
  }
  
console.log(renderUserProfile());