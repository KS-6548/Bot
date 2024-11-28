import React from 'react'
import './Loading.css'

function Loading() {
  return (
    <>
      <div className="loader-page">
        <div className="svg-img">
          <svg className='logo' width="200" height="200" viewBox="0 0 325 296" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='s1' d="M162 103V119L225 231H162V249H263L188 126H324V103H162Z" />
            <path className='s2' d="M163 275V295H324V269L265 170H324V149H226L300 275H163Z"  />
            <path className='k-left' d="M1 294V49C15.0348 59.9844 19.8147 68.3308 23 87V294H1Z" />
            <path className='k-top' d="M69 194H43V78C31.1265 49.0241 21.531 38.4042 1 26V1C41.5086 20.0916 50.0566 40.5719 64 78V174L105 139C114.074 128.354 115.979 121.326 117 108H139C139.299 126.62 136.316 135.411 127 149L69 194Z"  />
            <path className='k-right' d="M146 160L90 201L146 244V218L129 201L170 167L156 144L146 160Z" />
            <path className='k-bottom' d="M41 210V295H60V231L105 267C114.13 276.395 117.199 282.372 117 295H138C141.476 278.855 138.36 269.882 125 254L67 210H41Z" />
          </svg>
        </div>
        <div id="bars">
          <div className="bar" id="bar1"></div>
          <div className="bar" id="bar2"></div>
          <div className="bar" id="bar3"></div>
          <div className="bar" id="bar4"></div>
          <div className="bar" id="bar5"></div>
        </div>
      </div>
    </>
  )
}

export default Loading