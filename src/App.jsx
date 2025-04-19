import "./index.css";

const showFooter = true;
const productData = [
  {
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    description: "Latest model with stunning display.",
    price: 800,
    photoName: "/smartphone.png",
    soldOut: false,
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with great sound quality.",
    price: 200,
    photoName: "/headphones.png",
    soldOut: false,
  },
  {
    name: "Smartwatch Z",
    description: "Stylish smartwatch with fitness tracking features.",
    price: 150,
    photoName: "/smartwatch.png",
    soldOut: false,
  },
  {
    name: "Gaming Console",
    description: "Powerful gaming console for endless fun.",
    price: 400,
    photoName: "/console.png",
    soldOut: true,
  },
  {
    name: "4K TV",
    description: "Ultra HD television with vibrant colors.",
    price: 1000,
    photoName: "/tv.png",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <Catalog />
      {/* <Footer year={2025} siteName="Electronic Store" /> */}
      {/* {showFooter ? <Footer year={2025} siteName="Electronic Store" /> : null} */}
      {showFooter && <Footer year={2025} siteName="Electronic Store" />}
    </>
  );
}

function Header() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const openHours = 9; // Store opens at 9 AM
  const closedHours = 21; // Store closes at 9 PM

  const isOpen = hour >= closedHours || hour < openHours ? false : true;

  return (
    <header className="header">
      <h1>Electronic Store</h1>
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#catalog">Catalog</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
      <div className="working-hours">
        {isOpen ? (
          <p>
            We are currently open. Hours: {openHours}:00 - {closedHours}:00
          </p>
        ) : (
          <p>
            We are currently closed. Hours: {openHours}:00 - {closedHours}:00
          </p>
        )}
      </div>
    </header>
  );
}

function Catalog() {
  return (
    <main className="catalog">
      <ul className="products">
        {productData.map((item) => (
          <Product prodObj={item} />
        ))}
      </ul>
    </main>
  );
}

function Product({ prodObj }) {
  const { name, photoName, price, description, soldOut } = prodObj;

  return (
    <li className="product">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

function Footer({ year, siteName }) {
  return (
    <footer className="footer">
      <p>
        © {year} {siteName}
      </p>
    </footer>
  );
}

export default App;
