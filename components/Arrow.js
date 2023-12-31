import React from 'react'

export default function Arrow({ color, link, props, small, extrasmall, purple, purpleBG }) {
  return (
    <div className={`rounded-full grid place-content-center border ${purple || purpleBG ? 'border-[#493bbb]' : 'border-white'}  ${small ? "h-10 w-10" : extrasmall ? "h-6 w-6" : 'h-14 w-14'} ${purpleBG && 'bg-[#493bbb] border-[#493bbb]'} group hover:bg-white hover:border-transparent duration-[250ms] ease-out cursor-pointer`}>
      <div className={`${small ? "h-4 w-4 scale-75" : extrasmall ? "h-4 w-4 scale-50" : 'h-4 w-4'}`}>
        <svg
          className={`fill  duration-[250ms] ease-out group-hover:fill-[#3e3391] ${purple ? 'fill-[#493bbb]' : 'fill-white'}`}
          xmlns="http://www.w3.org/2000/svg"
          height='100%'
          width='100%'
          {...props}
        >
          <path
            d="M10.417 5.087a.069.069 0 0 0 .024-.036c.12.011.182-.091.249-.156a3.772 3.772 0 0 0 .854-.91.336.336 0 0 0 .122-.049q1.184-1.161 2.36-2.331c.127-.125.073-.209-.1-.225-3.381-.136-6.762-.024-10.142-.06-.218 0-.463.087-.652-.107a1.013 1.013 0 0 1-.347-.941 1.94 1.94 0 0 0 .08-.056 1.447 1.447 0 0 1 .879-.214h11.788a1.532 1.532 0 0 1 .494.053c.227.073.425.187.407.476a1.1 1.1 0 0 1 .033.409v11.359c0 .2-.02.4-.013.6.02.663-.331.925-.97.718l-.067-.053a1.69 1.69 0 0 1-.185-.843q.01-4 0-8V2.588c0-.067.033-.158-.065-.189a.109.109 0 0 0-.147.087 2.33 2.33 0 0 0-.761.643c-1.564 1.555-3.143 3.094-4.666 4.684-1.708 1.784-3.459 3.525-5.2 5.276-1.041 1.045-2.091 2.084-3.138 3.123a1.124 1.124 0 0 1-1.157.2c-.149-.467-.209-.914.274-1.241a.433.433 0 0 0 .08-.107.2.2 0 0 0 .129-.122.036.036 0 0 0 .027-.027c.036-.013.071-.027.067-.076.062-.018.113-.047.1-.125l.049-.047c.067.007.1-.044.133-.085.476-.527 1.023-.983 1.508-1.5.454-.489.968-.919 1.379-1.45a.044.044 0 0 0 .027-.018 1.411 1.411 0 0 0 .385-.3 13.367 13.367 0 0 1 1.021-1.019 6.455 6.455 0 0 0 .943-1.041 1.49 1.49 0 0 0 .5-.389 10.042 10.042 0 0 1 1.008-1.01c.1-.087.256-.153.265-.325a.556.556 0 0 0 .147-.067c.7-.7 1.41-1.388 2.091-2.1.06-.062.278-.085.182-.271Z"
            data-name="Trazado 107"
          />
        </svg>
      </div>
    </div>
  )
}
