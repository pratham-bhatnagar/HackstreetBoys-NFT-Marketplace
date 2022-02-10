import CreatorCard from './creatorCard'
export default function TopCreator() {
  return (
    <div className="mt-[10vh] mb-[5vh] grid justify-items-center">
      <p className="mb-[1vh] text-5xl font-bold">Featured Artworks</p>
      <p className="mb-[4vh] text-xl text-[#FFFFFF80]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-3 gap-7">
        <CreatorCard img="/creator3.svg" profile="/profile.jpg" />
        <CreatorCard img="/creator2.svg" profile="/profile.jpg" />
        <CreatorCard img="/creator3.svg" profile="/profile.jpg" />
      </div>
    </div>
  )
}