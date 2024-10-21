export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'1 person',
        icon:'🧍',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'2 people',
        icon:'🧑‍🤝‍🧑',
        people:'2 people'
    },
    {
        id:3,
        title:'Family/Friends',
        desc:'3-5 people',
        icon:'👨‍👧‍👦',
        people:'3 to 5 people'
    },
    {
        id:4,
        title:'Large Group',
        desc:'5-10 people',
        icon:'👨‍👩‍👦‍👦',
        people:'5 to 10 people'
    },
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Staying conscious of costs',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Open to spending',
        icon:'💸',
    },
    {
        id:3,
        title:'Luxury',
        desc:'I have money to spend',
        icon:'💰',
    },
]

export const AI_PROMPT='Generate a Travel Plan for Location: {location}, for {totalDays} Days for {traveler} people with a {budget} budget. Give me a Hotels options list with HotelName, Hotel address, price, hotel image url, geo coordinates , rating, descriptions and suggest itinerary with placeName, place details, place image URL, geo coordinates , ticket pricing, rating, time to travel to each of the locations for {totalDays} days with each day plan with best time to visit in JSON format.'