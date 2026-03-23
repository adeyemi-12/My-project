const apartmentList = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    descripition:"Hello",
    location: "Sunnyvale, CA",
    title: "Serenity Ridge Villa",
    beds: 3, baths: 2, sqft: "2,100", price: "3,600"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    location: "San Francisco, CA",
    title: "The Horizon Suites",
    beds: 2, baths: 1, sqft: "1,200", price: "4,200"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    location: "Austin, TX",
    title: "Urban Loft Center",
    beds: 1, baths: 1, sqft: "850", price: "1,850"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    location: "Miami, FL",
    title: "Ocean Breeze Condo",
    beds: 4, baths: 3, sqft: "3,200", price: "5,900"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    location: "Seattle, WA",
    title: "Pineview Apartments",
    beds: 2, baths: 2, sqft: "1,100", price: "2,750"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    location: "Denver, CO",
    title: "Mountain High Villa",
    beds: 3, baths: 2.5, sqft: "2,400", price: "3,100"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
    location: "New York, NY",
    title: "Skyline Central",
    beds: 2, baths: 2, sqft: "1,050", price: "5,200"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1499955085172-a104c9463ece",
    location: "Portland, OR",
    title: "The Redwood Flats",
    beds: 1, baths: 1, sqft: "720", price: "1,600"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511",
    location: "Nashville, TN",
    title: "Music Row Manor",
    beds: 3, baths: 3, sqft: "1,950", price: "2,900"
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1512918766671-ad6507962077",
    location: "Los Angeles, CA",
    title: "Sunset Boulevard Studios",
    beds: 0, baths: 1, sqft: "550", price: "2,450"
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    location: "Chicago, IL",
    title: "Windy City Penthouse",
    beds: 3, baths: 3, sqft: "2,800", price: "4,800"
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    location: "Phoenix, AZ",
    title: "Desert Mirage Estate",
    beds: 4, baths: 3.5, sqft: "3,500", price: "3,200"
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    location: "Boston, MA",
    title: "The Ivy Townhouse",
    beds: 2, baths: 1.5, sqft: "1,350", price: "3,850"
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1493236272120-200db0da1927",
    location: "Atlanta, GA",
    title: "Peachtree Gardens",
    beds: 2, baths: 2, sqft: "1,150", price: "2,100"
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324",
    location: "Dallas, TX",
    title: "Lonestar Luxury",
    beds: 1, baths: 1, sqft: "900", price: "1,750"
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1536376074432-bf121770244a",
    location: "San Diego, CA",
    title: "Pacific View Point",
    beds: 3, baths: 2, sqft: "1,800", price: "4,500"
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1501183007986-d0d080b147f9",
    location: "Salt Lake City, UT",
    title: "Canyon Rim Apartments",
    beds: 2, baths: 2, sqft: "1,250", price: "1,950"
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118",
    location: "Philadelphia, PA",
    title: "Liberty Square Lofts",
    beds: 1, baths: 1, sqft: "780", price: "1,800"
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1494203484021-3c454dac695d",
    location: "Las Vegas, NV",
    title: "Neon Palms Residences",
    beds: 2, baths: 2, sqft: "1,400", price: "2,300"
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    location: "Charleston, SC",
    title: "Cobblestone Court",
    beds: 3, baths: 2.5, sqft: "2,200", price: "2,850"
  },
  {
    id: 21,
    image: "https://images.unsplash.com/photo-1512914890251-2f96a9b092e3",
    location: "Washington, D.C.",
    title: "Capitol Hill Quarters",
    beds: 2, baths: 1, sqft: "950", price: "3,100"
  },
  {
    id: 22,
    image: "https://images.unsplash.com/photo-1502005229762-f1ba5adad53b",
    location: "New Orleans, LA",
    title: "The French Quarter Loft",
    beds: 1, baths: 1, sqft: "1,100", price: "2,250"
  },
  {
    id: 23,
    image: "https://images.unsplash.com/photo-1493236293902-36c7379f8f25",
    location: "Minneapolis, MN",
    title: "Lakeside North",
    beds: 2, baths: 2, sqft: "1,450", price: "2,400"
  },
  {
    id: 24,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
    location: "Toronto, ON",
    title: "Maple Leaf Heights",
    beds: 3, baths: 2, sqft: "1,900", price: "4,850"
  }
];

export default apartmentList;