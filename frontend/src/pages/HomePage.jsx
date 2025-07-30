import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./HomePage.css"
import NavBar from '../components/NavBar'
import HomePageBg from '../assets/HomePageBgImage.jpg'
import HomePageBg2 from '../assets/HomePageBgImage2.jpeg'
import HomePageBg3 from '../assets/HomePageBgImage3.jpg'
import HomePageBg4 from '../assets/HomePageBgImage4.jpg'
import HomePageBg5 from '../assets/HomePageBgImage5.jpg'
const HomePage = () => {
    const location = useLocation();
    const userId = location?.state.userId;
    console.log("this is user id", userId)
    const listOfImage = [
        HomePageBg,
        HomePageBg2,
        HomePageBg3,
        HomePageBg4,
        HomePageBg5
    ]
    const [BgImage, setBgImage] = useState(listOfImage[0])

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % listOfImage.length;
            setBgImage(listOfImage[index]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bgImage' style={{ backgroundImage: `url(${BgImage})` }}>
            <div className='mainContent'>
                <NavBar userId={userId}/>
                <div className='scrollableWindow'>
                    <div className='bottomDiv'>
                        <div className='divWithBgTransparent'>
                            SHOP

                        </div>
                        <div className='actualContentDiv'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque inventore blanditiis temporibus, numquam ad necessitatibus quaerat magnam facere, assumenda aut deleniti ipsa quidem ea fugit sit maiores magni rem hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil assumenda ipsam eveniet sequi iure iste? Error, omnis amet est ab, temporibus similique harum necessitatibus modi explicabo voluptate, facere repellendus cumque? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab iure dolorem commodi quas voluptatum quae aut dolore tempora esse blanditiis cumque, vel aliquam dolorum, corporis quod, eius maiores quidem animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maxime eius recusandae quas debitis? Voluptatum est, harum atque ea consequatur natus eligendi amet rem beatae laborum, similique deserunt, dolores fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorem animi maiores ipsa repudiandae molestiae repellat illum quod unde architecto. Repudiandae inventore dignissimos libero fugiat! Laboriosam ratione facere officia labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam quaerat sunt illum natus saepe placeat tempore pariatur. Placeat dolores saepe quasi quam tempore quis at incidunt deserunt, reprehenderit repudiandae?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis dolore amet deserunt explicabo error cumque recusandae, dignissimos excepturi alias harum non, animi consequuntur beatae mollitia, itaque maiores voluptatum? Perspiciatis, quas! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quam odio doloribus obcaecati aliquam sit possimus enim, ab temporibus nulla reprehenderit repudiandae rerum itaque? Dolores veniam maxime nobis rerum recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio ab assumenda dolore odit quibusdam est laudantium quaerat tempore id quod quam rem eveniet cumque. Illum maxime eius tempore neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veniam iusto ut minus expedita enim, accusamus culpa, maiores doloribus debitis eius et facere necessitatibus non nostrum totam error animi dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vel, in minus nesciunt, numquam suscipit nobis, ullam voluptatibus tenetur perferendis quod voluptates fugit illo maiores. At deserunt suscipit consequuntur recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consectetur maiores suscipit pariatur. Excepturi perspiciatis nemo neque hic eveniet beatae. Accusantium suscipit quas ad eaque maxime sint dolores error voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aliquid voluptates dolores quisquam repellat minima, atque animi quibusdam temporibus fugit molestias nemo blanditiis ipsa. Explicabo mollitia eum totam soluta perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quo nam, molestias voluptatum ducimus eum dignissimos assumenda perferendis quia aliquid molestiae quisquam velit praesentium enim doloribus commodi vitae neque laborum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas facere a distinctio repellat quo saepe. Voluptatum, ea. Earum soluta cum eveniet iste minus at placeat illum nemo deserunt nobis blanditiis tempore itaque iusto, veniam nisi autem ipsam sapiente quos! Facere cupiditate excepturi ipsam quae ullam, dolores est saepe labore libero id a consectetur officia nulla sequi ut nostrum nobis ipsa, exercitationem blanditiis quia aut. Atque consequuntur ullam dolore in ducimus excepturi quo nam vero blanditiis, distinctio esse labore ad sunt sit molestias modi perspiciatis aliquam laudantium? Harum accusamus repudiandae quos, excepturi sunt modi tempora rem expedita assumenda quod saepe repellat itaque tenetur quas voluptate impedit eum laborum nostrum. Nihil, fuga. Reprehenderit saepe sapiente, pariatur modi eaque voluptate hic provident maxime dolore optio officia suscipit? Quos eveniet molestiae vitae dolor culpa vero sit magni magnam omnis commodi impedit iusto mollitia ipsa facere iste pariatur accusamus amet, ex nesciunt corrupti cupiditate incidunt ratione hic. Laborum rem eius similique in dicta quas, deleniti corporis debitis molestiae. Tempora ut accusantium consequatur facere. Perferendis, dignissimos maxime eveniet fuga ea, veniam quo repudiandae sint, tempora nam ut aliquid repellendus eaque dolorum eum molestias. Veniam repellat corrupti animi consectetur saepe fuga veritatis non mollitia, commodi possimus doloremque harum soluta tempore ipsum doloribus reprehenderit eius, obcaecati modi aut eveniet. At maiores accusamus magni nisi sequi, hic illo iusto unde!
                        </div>
                    </div>

                </div>
                {/* <h1 >hello</h1> */}
            </div>
        </div>
    )
}

export default HomePage
