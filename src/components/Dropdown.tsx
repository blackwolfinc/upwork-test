/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

interface IDropdown {
  list: unknown,
  onSelect: any
}

interface Ilist { title: string, value: number }

export const Dropdown = (props: IDropdown) => {
  const [Data,] = useState<any>(props.list ? props.list : [])


  const renderOption = () => {
    if (Data) {
      return Data.map((value: Ilist) => {
        return <option value={value.value}>{value.title}</option>
      })
    }
  }


  return (
    <div className='bg-gradient  select-wrapper px-[3px] py-[3px] rounded-[15px] min-w-[12rem]'>
      <select onChange={(e) => { props.onSelect(e.target.value) }} className='select-custom  bg-gradient-to-r from-[#251B3C]  to-[#222238] w-full rounded-[15px] px-[1rem] py-[1rem]'>
        {renderOption()}
      </select>
    </div>
  )
}
