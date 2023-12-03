/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useMemo, useState } from 'react'
import { Dropdown } from './Dropdown'
import ArrowDown from "../assets/img/arrow-down-svgrepo-com.svg"
import { ButtonDeposit } from './ButtonDeposit'

// Interface ============================================================

interface IbuttonList {
  title: string
  value: string
}

interface IBuyData {
  img: string;
  title: string
}

interface ITransfer {
  buttonList?: unknown
  dataCrypto?: unknown
  price?: number
  token?: number
  dataBuy?: IBuyData
}

export const Transfer = (props: ITransfer) => {

  // ==========================================================================
  // State
  // ==========================================================================

  const [Active, setActive] = useState("")
  const [Rotate, setRotate] = useState(false)
  const [DataDropdown, setDataDropdown] = useState(undefined)
  // Use Memo ===============================================================
  const token = useMemo(() => props.token, [props.token])
  const buyData = useMemo(() => props.dataBuy, [props.dataBuy])
  const payment = useMemo(() => {
    if (props.token && DataDropdown) {
      return props.token * DataDropdown
    }
    else return 0
  }, [props.token, DataDropdown])
  // Dropdown ================================================================
  const DataCrypto = useMemo(() => props.dataCrypto, [props.dataCrypto])



  // ==========================================================================
  // render Button
  // ==========================================================================

  const renderButtonList = () => {
    const data: any = props ? props.buttonList : []
    if (data) {
      return data?.map((value: IbuttonList) => {
        return <button onClick={() => { setActive(value.value) }} className={`${Active == value.value ? "text-Active" : "text-disable"}`}>{value.title}</button>
      })
    }
  }

  // render Button end ============================================================

  return (
    <div className='wrap'>
      <div className='space-x-4 mb-[1rem]  self-start ml-[3rem]'>
        {/* Render Button List */}
        {renderButtonList()}
      </div>
      {/* Body */}
      <div className='w-full space-y-2'>
        {/* Card 1 */}
        <div className={`card relative ${!Rotate ? "border-none scale-[98%]" : ""}`}>
          <div className='card-left'>
            <h1 className=''> {!Rotate ? "How many token do you want to get ?" : "You pay"}</h1>
            <h2 className='text-number'>{token}</h2>
          </div>
          <div className='card-right space-x-4  '>
            <img src={buyData?.img}></img>
            <h1>{buyData?.title}</h1>
          </div>
          <div className={`arrow-down ${Rotate ? "rotate-180" : ""}  `} onClick={() => { setRotate(!Rotate) }}>
            <img className='h-7' src={ArrowDown}></img>
          </div>
        </div>
        {/* Card 2 */}
        <div className={`card ${Rotate ? " border-none scale-[98%]" : ""}`}>
          <div className='card-left'>
            <h1 className=''> {Rotate ? "How many token do you want to get ?" : "You pay"}</h1>
            <h2 className='text-number'>{payment}</h2>
          </div>
          <div className='card-right'><Dropdown list={DataCrypto} onSelect={setDataDropdown} /></div>
        </div>
      </div>
      {/* Deposit Button  */}
      <ButtonDeposit />
    </div>

  )
}
