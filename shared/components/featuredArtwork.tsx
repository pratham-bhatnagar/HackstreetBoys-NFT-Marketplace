import Card from './card'

export default function FeaturedArtwork() {
  return (
    <div className="mt-[10vh]  grid justify-items-center" id="feature">
      <p className="mb-[1vh] text-5xl font-bold">Featured Artworks</p>
      <p className="mb-[4vh] text-xl text-[#FFFFFF80]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-3 gap-7">
        <Card
          img="/1.png"
          price={'100 ETH'}
          name={'Sassy Ninja'}
          creator={'Farahan'}
        />
        <Card
          img="/2.png"
          price={'1 ETH'}
          name={'Crazy Robot'}
          creator={'Pratham'}
        />
        <Card
          img="/3.svg"
          price={'0.0001 ETH'}
          name={'Tasty Egg'}
          creator={'Karan'}
        />
      </div>
    </div>
  )
}
