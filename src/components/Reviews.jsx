import React from 'react';

const reviewsData = [
  {
    name: "Jessica W.",
    rating: 5,
    text: "The Shoyu Butter Mentaiko Pasta is out of this world! The ambiance is perfectly dark and aesthetic, highly recommend for a date night or brunch with friends.",
    date: "2 weeks ago"
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "Absolutely stunning interior design and top-notch service. The Steak Don is incredibly tender, and their coffee is roasted to perfection.",
    date: "1 month ago"
  },
  {
    name: "Sarah L.",
    rating: 5,
    text: "My favorite spot in Surabaya for Japanese fusion. The Dutch pancakes are a must-try. Everything from the presentation to the taste is a 10/10.",
    date: "3 months ago"
  },
  {
    name: "Amanda K.",
    rating: 5,
    text: "Very cozy and highly aesthetic cafe! I loved the photobooth inside. The Super Matcha 2.0 and Dry Udon are absolute game-changers. Definitely worth the price.",
    date: "2 months ago"
  },
  {
    name: "David C.",
    rating: 5,
    text: "Came here on a weekday afternoon to avoid the weekend crowd. The Shiopan (Salt Bread) is the best I've ever had. Such a unique fusion menu that you can't find elsewhere in Surabaya.",
    date: "1 week ago"
  },
  {
    name: "Evelyn R.",
    rating: 5,
    text: "10/10 experience! The ingredients are so fresh and high-quality. We ordered the Kabocha Ume and the Salmon Carpaccio to share, and both were incredibly flavorful.",
    date: "4 months ago"
  },
  {
    name: "Budi S.",
    rating: 5,
    text: "A premium dining experience. Yes, it's on the pricier side, but the quality justifies it. The Wagyu Striploin melted in my mouth. Great warm ambient lighting too.",
    date: "3 weeks ago"
  },
  {
    name: "Clarissa M.",
    rating: 5,
    text: "The perfect place for photoshoots and great food! Every corner is instagrammable. Don't leave without trying their homemade baked goods, especially the matcha cookie.",
    date: "1 month ago"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="section reveal" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-header">
        <h2 className="section-title text-gradient">What Our Guests Say</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
          <span style={{ fontSize: '1.5rem', color: '#fbbc04' }}>★★★★★</span>
          <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>5.0 on Google Maps</span>
        </div>
      </div>
      
      <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        {reviewsData.map((review, idx) => (
          <div key={idx} className="review-card glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="review-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#000' }}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{review.name}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{review.date}</span>
                </div>
              </div>
              <div style={{ color: '#fbbc04' }}>★★★★★</div>
            </div>
            <p style={{ margin: 0, fontStyle: 'italic', lineHeight: '1.6', color: 'var(--color-text)' }}>"{review.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
