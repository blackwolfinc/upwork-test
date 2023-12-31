import { Transfer } from "../components/Transfer"
import Logo from "../assets/img/siba.png"

export const Homepage = () => {

  // Data Button List 
  const ButtonListData = [
    { title: "Swap", value: "sw" },
    { title: "Swap Back", value: "sb" },
    { title: "Swap Transfer", value: "tf" },
  ]
  // Data Token User
  const UserToken = 10

  // Data Price 
  const BuyData = {
    img: Logo,
    title: "Siba "
  }

  const DataCrypto = [
    { title: "Select Frist", value: 0 },
    { title: "BTC", value: 10000 },
    { title: "WTC", value: 20000 },
    { title: "CKK", value: 30000 },
  ]

  return (
    <div className='background'>
      <Transfer buttonList={ButtonListData} token={UserToken} dataBuy={BuyData} dataCrypto={DataCrypto} />
    </div>
  )
}
