// 'use client'
import Link from 'next/link'
import React from 'react'
const Button = ({data,className}) => {
  return (
    <div className={className}>
        <Link href ="/waitlist">{data}</Link>
    </div>
  )
}

export default Button