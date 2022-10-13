type FooterProps = {
  
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className="flex w-full px-4 py-4 bg-slate-200">
      <p className="text-sm text-slate-800 font-semibold italic">Moraliam</p>
      <p className="ml-auto text-xs text-gray-800">Made by Carolyn and Francisco</p>
    </div>
  )
}

export default Footer