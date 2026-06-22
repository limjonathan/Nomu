import React, { useState } from 'react';

const menuData = [
  {
    category: "🍞 Everyday Specials",
    items: [
      { name: "Japanese Salt Bread & Coffee Combo", price: "45k", desc: "Everyday, 08:00 - 17:00. Upgrades: Flavoured Salt Bread +5k, Other Coffee +5k" }
    ]
  },
  {
    category: "🍳 Brunch (9 AM - 5 PM)",
    items: [
      { name: "Berry French", price: "75k", desc: "Shiopan french toast, seasonal fruits, cream, maple syrup" },
      { name: "Basic BF", price: "75k", desc: "Shiopan french toast, sunny side up egg, grilled sausage, mushroom, tomato, bacon, maple syrup" },
      { name: "G.O.T", price: "90k", desc: "Garlic butter shiopan or ciabatta, onsen egg, truffle champignon, parmesan" },
      { name: "Skinny Omelette", price: "60k", desc: "Egg white omelette, horenzo, champignon, parmesan, tomato salsa, pesto greens" },
      { name: "Chicken Teriyaki Sando", price: "75k", desc: "Shiopan or ciabatta with garlic butter, chicken teriyaki, tang oh fries" },
      { name: "BBQ Pork Sando", price: "80k", desc: "Shiopan or ciabatta, slow cooked pork, bbq sauce, caramelized onions, coriander, tang oh fries" },
      { name: "Barista Breakfast", price: "40k", desc: "Espresso and cappuccino" }
    ]
  },
  {
    category: "🥗 To Share (Appetizers & Sides)",
    items: [
      { name: "Kabocha Ume", price: "45k", desc: "Roasted pumpkin, tang oh, dried plum, walnut, plum dressing" },
      { name: "Suan Nam Sod", price: "65k", desc: "Mixed greens, muscat grapes, pork belly bits, mint, Thai salad dressing (Upgrade to salmon +25k)" },
      { name: "Curry Fries", price: "50k", desc: "Fries, curry seasoning, coriander mayo dip" },
      { name: "Truffle Fries", price: "50k", desc: "Fries, truffle oil, parmesan" },
      { name: "Salmon Carpaccio", price: "95k", desc: "Cured salmon, tomato salsa, nori crumbs, shoyu, EVOO" },
      { name: "Chicken Nanban", price: "80k", desc: "Chicken tempura, nanban tare, homemade tartar sauce, nori" }
    ]
  },
  {
    category: "🥞 Dutch Pancakes (Oven-Baked)",
    items: [
      { name: "5hrs Pork Shoulder", price: "85k", desc: "Slow cooked pork, bechamel, parsley" },
      { name: "'Takoyaki' Dupe", price: "85k", desc: "Octopus, mayo, takoyaki sauce, katsuobushi, nori" },
      { name: "Maple Bacon Vanilla", price: "85k", desc: "Bacon, vanilla ice cream, maple syrup" }
    ]
  },
  {
    category: "🍚 Rice Bowls (Donburi)",
    items: [
      { name: "Gyudon", price: "80k", desc: "Beef shortplate, shoyu tare, onsen egg, katsuobushi, nori" },
      { name: "Steak Don", price: "90k", desc: "AUS wagyu striploin, caramelized shoyu, onsen egg, cabbage vinaigrette, nori" },
      { name: "Buta Miso", price: "85k", desc: "Slow cooked pork belly, aka miso sauce, greens, nori (Add udon +10k)" },
      { name: "Shogayaki Buta Don", price: "90k", desc: "Slow cooked pork belly, ginger shoyu sauce, ajitsuke egg, horenzo, Danish pickled onion" },
      { name: "Poke Bowl (Miso / Sriracha)", price: "110k", desc: "Salmon sashimi cube, avocado, tobiko, cucumber, greens, nori, garlic chips" },
      { name: "Roast Beef Don", price: "155k", desc: "2hrs sous vide AUS tenderloin, onsen egg, shoyu wasabi sour cream, sukiyake tare, rice" }
    ]
  },
  {
    category: "🍝 Pasta & Udon",
    items: [
      { name: "Miso Mushroom", price: "75k", desc: "Shimeji, eringi, shiro miso, katsuobushi, nori, EVOO (Add udon +10k)" },
      { name: "Mushroom Pasta", price: "80k", desc: "Homemade vegan pasta, shimeji, eringi, garlic, onsen egg, parmesan" },
      { name: "Shyu Butter Mentaiko", price: "125k", desc: "Mentaiko (pollock roe), shoyu butter, tobiko, watercress, nori (Add udon +10k)" },
      { name: "Dry Udon", price: "100k", desc: "Udon, Nomu secret sauce, beef shortplate, onsen egg, chili mala oil" }
    ]
  },
  {
    category: "🥩 Meat & Chicken",
    items: [
      { name: "A5 Uchi Momo (200gr)", price: "595k", desc: "A5 wagyu uchimomo, red wine sauce or choice of butters, choice of potato" },
      { name: "Wagyu Striploin (200gr)", price: "395k", desc: "MB 4-5 wagyu striploin, garlic shoyu, choice of potato" },
      { name: "Chicken Thigh", price: "90k", desc: "Boneless chicken thigh, tomato / garlic butter / teriyaki sauce, choice of potato or rice" },
      { name: "Beef Striploin (160gr)", price: "160k", desc: "AUS wagyu striploin, mushroom or Nomu sauce, choice of potato" }
    ]
  },
  {
    category: "🍱 Teishoku (Set Meals)",
    items: [
      { name: "Saba Teishoku", price: "145k", desc: "Japanese mackerel with miso sauce, ajitsuke egg, rice, soup" },
      { name: "Salmon Teishoku", price: "155k", desc: "Grilled salmon with teriyaki sauce, green salad, ajitsuke egg, rice, soup" },
      { name: "Buta Miso Teishoku", price: "95k", desc: "Slow cooked pork belly with miso sauce, ajitsuke tamago, rice, soup" },
      { name: "Karaage Teishoku", price: "80k", desc: "Chicken karaage, ajitsuke egg, rice, soup" },
      { name: "Chicken Nanban Teishoku", price: "85k", desc: "Chicken nanban, homemade tartare sauce, ajitsuke egg, rice, soup" }
    ]
  },
  {
    category: "☕ Coffee & Drinks",
    items: [
      { name: "Black", price: "30k/32k", desc: "Hot / Iced" },
      { name: "Cafe Latte", price: "35k/40k", desc: "Hot / Iced" },
      { name: "Einspanner", price: "43k", desc: "Iced black coffee with sea salt foam" },
      { name: "Dirty Matcha Einspanner", price: "50k", desc: "Uji matcha latte + coffee cream (Iced)" },
      { name: "Japanese Tea", price: "30k/25k", desc: "Sencha / Genmaicha / Hojicha (Hot / Iced)" },
      { name: "Uji Matcha Latte", price: "45k", desc: "Iced" },
      { name: "Koime Matcha Latte", price: "65k", desc: "Ceremonial grade, extra strong (Iced)" }
    ]
  },
  {
    category: "🍰 Desserts & Baked Goods",
    items: [
      { name: "Matcha Flood", price: "55k", desc: "Overflowing matcha sauce, ladyfinger, mascarpone" },
      { name: "Pistachio Berrymisu", price: "55k", desc: "Hojicha ladyfinger, strawberry compote, mascarpone, pistachio, basil oil" },
      { name: "Basque Cheesecake Brulee", price: "80k", desc: "Served with ice cream, cream, and choice of cocoa crumbs or fruit compote" },
      { name: "Salt Bread / Shiopan", price: "17k+", desc: "Original, Garlic, Nori, Bacon Cheese, Pistachio, Kaya Butter, Nama Matcha, etc." }
    ]
  }
];

const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  return (
    <section id="full-menu" className="section reveal" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-header">
        <h2 className="section-title text-gradient">Full Menu</h2>
        <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Explore our complete selection of Japanese Creative Fusion dishes.
          <br/>
          <span style={{ fontSize: '0.85rem' }}>* Prices are in thousands (k). PB1 Tax (10%) & Service Charge (5%) are not included.</span>
        </p>
      </div>
      
      {/* Menu Categories Tabs */}
      <div className="menu-tabs-container">
        {menuData.map((section) => (
          <button
            key={section.category}
            className={`menu-tab ${activeCategory === section.category ? 'active' : ''}`}
            onClick={() => setActiveCategory(section.category)}
          >
            {section.category}
          </button>
        ))}
      </div>

      <div className="full-menu-grid categorized-view">
        {menuData.filter(section => section.category === activeCategory).map((section, idx) => (
          <div key={idx} className="menu-category glass-panel fade-in">
            <h3 className="category-title text-gradient">{section.category}</h3>
            <ul className="category-items">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx} className="menu-item-row">
                  <div className="menu-item-header">
                    <span className="menu-item-name">{item.name}</span>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-desc">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="nomnom-club-banner glass-panel" style={{ marginTop: '3rem', textAlign: 'center', padding: '2rem' }}>
        <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>📢 NOMNOM CLUB (Join Our Club!)</h3>
        <p style={{ marginBottom: '1rem' }}>Ask our friendly staff about joining for more information!</p>
        <ul style={{ listStyle: 'none', padding: 0, display: 'inline-block', textAlign: 'left', color: 'var(--color-text-muted)' }}>
          <li>✨ <strong>Discounts on every purchase</strong> (no minimum purchase required)</li>
          <li>🎂 <strong>Special birthday discounts</strong></li>
          <li>🌟 <strong>Priority access</strong> to NOMU events and promotions</li>
        </ul>
      </div>
    </section>
  );
};

export default FullMenu;
