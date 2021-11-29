// import './Homepage';
import './Footer.css';

function Footer() {
  return (
    <div id='foot'>
      <div id='tags'>
        <a className='foottag' href='/'>Home</a>
        <a className='foottag' href='/products'>Shop</a>
        <a className='foottag' href='/'>Contact</a>
        <a className='foottag' href='/aboutus'>About</a>
        <a className='foottag' href='/'>Sizing</a>
        <a className='foottag' href='/'>Mission</a>
        <a className='foottag' href='/'>FAQ</a>
        <a className='foottag' href='/'>Exchanges</a>
      </div>
      <div id='emailList'>
        <h6 id='joinhead'>Join Our Mailing List</h6>
        <form action='/sendEmail'>
          <input id='inputBox' type='email' placeholder='email address' />
          <button id='join' type='submit'>Join</button>
        </form>
      </div>
      <div id='socials'>
        <h6 id='company'>CLOUDY HAPPINESS</h6>
        <a href='https://www.instagram.com/cloudyhappiness.co/'><img className='sociallink' src='https://cdn.discordapp.com/attachments/714892213955592297/913165612820353055/unknown.png' /></a>
        <a href='https://www.facebook.com/cloudyhappinessco-110710387870861/'><img className='sociallink' src='https://cdn.discordapp.com/attachments/714892213955592297/913165727958192158/unknown.png' /></a>
        <a href='https://www.tiktok.com/@cloudyhappiness.co?'><img className='sociallink' src='https://cdn.discordapp.com/attachments/714892213955592297/913166008833962024/unknown.png' /></a>
      </div>
      <div id='sig'>
        <h6>CLOUDY HAPPINESS :copyright: 2021</h6>
        <img id='cornerLogo' src="https://cdn.discordapp.com/attachments/714892213955592297/913169239052001280/unknown.png" />
      </div>
    </div>
  );
}

export default Footer;