import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render () {
    return (
    <html lang='it-IT'>
      <Head />
      <body className="size-1140">
        <Main />
        <NextScript />
      </body>
    </html>)
  }
}