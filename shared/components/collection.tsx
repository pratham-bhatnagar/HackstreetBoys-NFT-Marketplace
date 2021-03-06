import Card from './card'
export default function Collection() {
  return (
    <section id="collection">
      <div className="mt-[5vh]  grid justify-items-center">
        <p className="mb-[1vh] text-5xl font-bold">Collection</p>
        <p className="mb-[4vh] text-center text-xl text-[#FFFFFF80]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="2xl:gap-30 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          <Card
            img="/1.jpeg"
            price={'1 ETH'}
            name={'Si-fi 420'}
            creator={'Pratham'}
          />
          <Card
            img="/2.jpeg"
            price={'100 ETH'}
            name={'Dead AF'}
            creator={'Karan'}
          />
          <Card
            img="/3.svg"
            price={'0.001 ETH'}
            name={'Collection 69'}
            creator={'Abhinav'}
          />
          <Card
            img="4.jpeg"
            price={'102 ETH'}
            name={'Killer '}
            creator={'Farhan'}
          />
          <Card
            img="5.svg"
            price={'1 ETH'}
            name={'Lil Girl'}
            creator={'Karan'}
          />
          <Card
            img="6.jpeg"
            price={'10 ETH'}
            name={'Red Room'}
            creator={'Abhinav'}
          />
          <Card
            img="7.jpeg"
            price={'0.023 ETH'}
            name={'Upside Down'}
            creator={'Farhan'}
          />
          <Card
            img="9.jpeg"
            price={'4.2 ETH'}
            name={'Sexy Rihno'}
            creator={'Karan'}
          />
          <Card
            img="10.jpeg"
            price={'0.001 ETH'}
            name={'Looping Dead'}
            creator={'Farhan'}
          />
          <Card
            img="11.jpeg"
            price={'0.0125 ETH'}
            name={'Jungle Ghost'}
            creator={'Farhan'}
          />
          <Card
            img="12.jpeg"
            price={'3 ETH'}
            name={'Cracy Dead'}
            creator={'Farhan'}
          />
          <Card
            img="13.jpeg"
            price={'5 ETH'}
            name={'Balls It is'}
            creator={'Pratham'}
          />
        </div>
      </div>
    </section>
  )
}
