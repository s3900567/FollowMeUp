import { Typography } from 'antd';
import { FaStar } from 'react-icons/fa';
import person1 from '../../assets/CustomersPage/person1.jpg';
import person2 from '../../assets/CustomersPage/person2.jpg';
import person3 from '../../assets/CustomersPage/person3.jpg';

const { Title, Text } = Typography;

const Reviews = () => {
  const testimonials = [
    {
      name: 'Maria Smantha',
      review:
        "I've tried several networking CRM tools, but Follow Me Up stands out. It's not just about managing contacts; it's about nurturing relationships. The follow-up reminders have been a game-changer.",
      stars: 5,
      image: person1, // Use the first image
    },
    {
      name: 'Lisa Cudrow',
      review:
        "Follow Me Up is perfect for entrepreneurs like me. It helps me stay organized during networking events and ensures I never miss an opportunity. It's become an essential part of my toolkit.",
      stars: 4,
      image: person2, // Use the second image
    },
    {
      name: 'John Smith',
      review:
        "I recommend Follow Me Up to all my clients. It's a powerful yet user-friendly platform that streamlines networking and relationship management. It's an excellent investment for any business.",
      stars: 5,
      image: person3, // Use the third image
    },
  ];

  return (
    <div className='container my-24 mx-auto md:px-6'>
      <section className='mb-32 text-center'>
        <div className='grid gap-x-6 md:grid-cols-3 lg:gap-x-12'>
          {testimonials.map((testimonial, index) => (
            <div className='mb-12 md:mb-0' key={index}>
              <div className='mb-6 flex justify-center'>
                <div
                  className='w-32 h-32 rounded-full shadow-lg dark:shadow-black/20'
                  style={{
                    backgroundImage: `url(${testimonial.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </div>
              <Text className='mb-2 text-lg font-bold'>{testimonial.name}</Text>
              <Text className='mb-4 block'>{testimonial.review}</Text>
              <div className='mb-0 flex justify-center'>
                {Array.from({ length: testimonial.stars }, (_, i) => (
                  <FaStar key={i} className='w-5 text-warning' />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
