import './index.css'
import svglogo from './assets/images/illustration-article.svg'
import image from './assets/images/image-avatar.webp'

function App() {
 
  return (
    <div className='flex justify-center items-center h-screen '>
      <div className='shadow w-[280px]  bg-white border-black border-2 rounded-2xl z-100' >
        <div className='p-3'>
          <img src={svglogo} className='w-[95%] rounded-md mx-auto '/>
        </div>
        <div className='px-5 mt-2 mb-4'>
          <button className='bg-yellow text-Black font-bold px-2 py-1 rounded-md text-xs'>Learning</button>
          <p className='text-Black font-[Figtree] text-xs my-2 font-bold'>Published 21 Dec 2023</p>
          <h1 className='text-yellow font-bold text-[18px]'>HTML & CSS foundations</h1>
          <p className='font-[Figtree] text-Grey my-2 text-[14px]'>These languages are the backbone of every website defining structure, content & presentation.</p>
          <p className='flex items-center'>
            <img src={image}  className='w-6'/>
            <p className='font-bold text-Black text-[12px]'>&nbsp; Greg Hooper</p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
