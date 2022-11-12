type HeroProps = {
  className?: string
}

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={`flex justify-start items-start text-6xl text-white p-6 ${className}`}>
      Fusion Food
    </div>
  )
}

export default Hero