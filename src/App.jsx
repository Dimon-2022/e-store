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
    <div>
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

function Header() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const openHours = 9; // Store opens at 9 AM
  const closedHours = 21; // Store closes at 9 PM
  
  
  const isOpen = (hour >= closedHours || hour < openHours) ? false : true;

  return (
    <header>
      <h1>Electronic Store</h1>
      <nav>
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
      {isOpen ? (
        <p>We are currently open. Hours: {openHours}:00 - {closedHours}:00</p>
      ) : (
        <p>We are currently closed. Hours: {openHours}:00 - {closedHours}:00</p>
      )}
    </header>
  );
}

function Catalog() {
  return (
    <main>
      <ul>
        <Product />
        <Product />
        <Product />
        <Product />
      </ul>
    </main>
  );
}

function Product() {
  const [laptop, ...other] = productData; // Example: using the first product for demonstration
  const { name, description, price, photoName } = laptop;

  return (
    <li>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2023 Electronic Store</p>
    </footer>
  );
}

export default App;
