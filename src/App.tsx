import './App.css';
import { Hero, About, Skills, AISkills, Projects } from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Skills />
      <AISkills />
      <Projects />

      <section id="contact" className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <button 
          onClick={
            
                // open whatsapp
    ()=>
      window.open(`https://wa.me/${+22967413170}?text=Hi, I'm interested in your services. Let's discuss how we can work together to achieve our goals.`, '_blank')
  
               
          }
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-medium text-lg transition-colors">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;