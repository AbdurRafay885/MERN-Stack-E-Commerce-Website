import "./Categories.css";

const categories = [
  { title: "AirPods", img: "https://i.ibb.co/LP5W0ZD/airpods.jpg" },
  { title: "Smart Watches", img: "https://i.ibb.co/9h9C3L0/watch.jpg" },
  { title: "Laptops", img: "https://i.ibb.co/2gVYPtB/laptop.jpg" },
  { title: "Mobile Phones", img: "https://i.ibb.co/XV7pSgK/phone.jpg" },
];

const Categories = () => {
  return (
    <div className="categories-box">
      {categories.map((cat) => (
        <div className="category-card" key={cat.title}>
          <img src={cat.img} alt={cat.title} />
          <p>{cat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
