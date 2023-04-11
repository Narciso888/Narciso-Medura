const Books = [
    {
        title: "House of the Fire Dragon",
        subject:[
            {
            name: "Raenyra Targaryen",
            house: "House Targaryen",
            id: 1
            },
            {
                name: "Laenor Velaryon",
                house: "House Velaryon",
                id: 2
                }
        ]
    },
    {
        title: "Game of Thrones: A song of ice",
        subject:[
            {
            name: "Cersei Lannister",
            house: "House of Lannister",
            id: 3
            },
            {
                name: "Arya Stark",
                house: "House of stark",
                id: 4
                }
        ]
    },
];

let bookChar = new Map();

bookChar.set(Books[1].subject[0].name + "from the house of"+ Books[1].subject[0].house);
bookChar.set(Books[1].subject[1].name + "from the house of"+ Books[1].subject[1].house);

console.log(bookChar);