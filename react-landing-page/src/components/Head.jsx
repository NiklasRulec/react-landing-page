import "./Head.css"

const Head = () => {
    return ( 
        <header>
            <h3>Hello There</h3>
            <h2>We Are Glint</h2>
            <div className="stripe"></div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, molestiae. Magnam eligendi, odio aliquid eaque eveniet iure! Ad aliquam eum nesciunt inventore ratione velit animi doloribus in sint delectus totam possimus assumenda ullam, fugit temporibus illo maiores architecto minus dignissimos quisquam laborum, distinctio quibusdam asperiores similique. Harum recusandae dolore commodi maiores quia necessitatibus, quo ipsa animi aspernatur veniam possimus ullam!</p>
            <article>
                <div className="container">
                    <h2>127</h2>
                    <p>Award Received</p>
                </div>
                <div className="stripeVertical"></div>
                <div className="container">
                    <h2>1505</h2>
                    <p>Cups of Coffee</p>
                </div>
                <div className="stripeVertical"></div>
                <div className="container">
                    <h2>109</h2>
                    <p>Projects Completed</p>
                </div>
                <div className="stripeVertical"></div>
                <div className="container">
                    <h2>102</h2>
                    <p>Happy Clients</p>
                </div>
            </article>
        </header>
     );
}
 
export default Head;