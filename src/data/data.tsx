import j1 from "../assets/j1.jpg"
import j2 from "../assets/j2.jpg"
import j3 from "../assets/j3.jpg"
import j4 from "../assets/j4.jpg"
import j5 from "../assets/j5.jpg"
import j6 from "../assets/j6.jpg"
import j7 from "../assets/j7.jpg"
import j8 from "../assets/j8.jpg"
import j9 from "../assets/j9.jpg"
import j10 from "../assets/j10.jpg"
import j11 from "../assets/j11.jpg"
import j12 from "../assets/j12.jpg"
import j13 from "../assets/j13.jpg"
import j14 from "../assets/j14.jpg"
import j15 from "../assets/j15.jpg"
import j16 from "../assets/j16.jpg"
import j17 from "../assets/j17.jpg"
import j18 from "../assets/j18.jpg"
import j19 from "../assets/j19.jpg"
import j20 from "../assets/j20.jpg"
import j21 from "../assets/j21.jpg"
import j22 from "../assets/j22.jpg"
import j23 from "../assets/j23.jpg"
import j24 from "../assets/j24.jpg"

interface DaysInterface {
    id: number;
    imgSrc: string;
    message: {
      date: string;
      thought: string;
    }; 
}

const Days : DaysInterface[] = [
  {
    "id": 1,
    "imgSrc": j1,
    "message": {
      "date": "01-12-2025",
      "thought": "Chaque bug est une occasion de mieux comprendre le code. Tout s’apprend."
    }
  },
  {
    "id": 2,
    "imgSrc": j2,
    "message": {
      "date": "02-12-2025",
      "thought": "Le code parfait n’existe pas, mais chaque ligne te rapproche de la maîtrise."
    }
  },
  {
    "id": 3,
    "imgSrc": j3,
    "message": {
      "date": "03-12-2025",
      "thought": "Chaque ligne de code construit ta façon de penser."
    }
  },
  {
    "id": 4,
    "imgSrc": j4,
    "message": {
      "date": "04-12-2025",
      "thought": "Un petit pas logique vaut mieux qu’un grand saut confus."
    }
  },
  {
    "id": 5,
    "imgSrc": j5,
    "message": {
      "date": "05-12-2025",
      "thought": "Un développeur ne rate jamais : il teste des hypothèses."
    }
  },
  {
    "id": 6,
    "imgSrc": j6,
    "message": {
      "date": "06-12-2025",
      "thought": "Quand tu bloques, ce n’est pas un mur ; c’est un chemin vers une nouvelle compétence."
    }
  },
  {
    "id": 7,
    "imgSrc": j7,
    "message": {
      "date": "07-12-2025",
      "thought": "Vaut mieux des heures passées à comprendre plutôt qu’à copier."
    }
  },
  {
    "id": 8,
    "imgSrc": j8,
    "message": {
      "date": "08-12-2025",
      "thought": "Lire le code des autres, c’est voyager dans leur manière de penser. Observe, inspire-toi, crée."
    }
  },
  {
    "id": 9,
    "imgSrc": j9,
    "message": {
      "date": "09-12-2025",
      "thought": "Les erreurs ne définissent pas ta valeur ; elles affinent ta logique."
    }
  },
  {
    "id": 10,
    "imgSrc": j10,
    "message": {
      "date": "10-12-2025",
      "thought": "Chaque fois que tu comprends un concept, tu poses une brique de ton autonomie."
    }
  },
  {
    "id": 11,
    "imgSrc": j11,
    "message": {
      "date": "11-12-2025",
      "thought": "Un commit par jour éloigne la démotivation pour toujours."
    }
  },
  {
    "id": 12,
    "imgSrc": j12,
    "message": {
      "date": "12-12-2025",
      "thought": "Tu n’as pas besoin de tout savoir, juste de savoir chercher et persévérer."
    }
  },
  {
    "id": 13,
    "imgSrc": j13,
    "message": {
      "date": "13-12-2025",
      "thought": "Le code, c’est comme la vie : on itère jusqu’à ce que ça fonctionne."
    }
  },
  {
    "id": 14,
    "imgSrc": j14,
    "message": {
      "date": "14-12-2025",
      "thought": "Les meilleurs développeurs ont été débutants avant d’être patients."
    }
  },
  {
    "id": 15,
    "imgSrc": j15,
    "message": {
      "date": "15-12-2025",
      "thought": "Si tu comprends pourquoi ça casse, tu es déjà à moitié expert."
    }
  },
  {
    "id": 16,
    "imgSrc": j16,
    "message": {
      "date": "16-12-2025",
      "thought": "Un bon café et un console.log bien placé peuvent sauver la journée."
    }
  },
  {
    "id": 17,
    "imgSrc": j17,
    "message": {
      "date": "17-12-2025",
      "thought": "Ton cerveau refactorise pendant ton sommeil. Fais-lui confiance."
    }
  },
  {
    "id": 18,
    "imgSrc": j18,
    "message": {
      "date": "18-12-2025",
      "thought": "Chaque projet est une aventure, pas une évaluation."
    }
  },
  {
    "id": 19,
    "imgSrc": j19,
    "message": {
      "date": "19-12-2025",
      "thought": "Tu n’as pas besoin d’être le meilleur ; juste de continuer à avancer."
    }
  },
  {
    "id": 20,
    "imgSrc": j20,
    "message": {
      "date": "20-12-2025",
      "thought": "Le code, c’est de la créativité structurée. Tu es un artiste logique."
    }
  },
  {
    "id": 21,
    "imgSrc": j21,
    "message": {
      "date": "21-12-2025",
      "thought": "Tes échecs d’aujourd’hui seront les anecdotes inspirantes de demain."
    }
  },
  {
    "id": 22,
    "imgSrc": j22,
    "message": {
      "date": "22-12-2025",
      "thought": "Plus ton code est clair, plus ton esprit l’est aussi."
    }
  },
  {
    "id": 23,
    "imgSrc": j23,
    "message": {
      "date": "23-12-2025",
      "thought": "Regarde : tu comprends déjà ce qui te paraissait impossible il y a un mois."
    }
  },
  {
    "id": 24,
    "imgSrc": j24,
    "message": {
      "date": "24-12-2025",
      "thought": "Tu n’apprends pas à coder, tu apprends à créer. Joyeux Noël, futur dev accompli 🎄"
   }
  }
]

export default Days;