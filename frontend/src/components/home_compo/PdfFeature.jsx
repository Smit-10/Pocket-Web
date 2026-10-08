import PdfImg from '../images/pdf_img.png'

function PdfFeature() {
  return (
    <div className="flex items-center px-8 ml-4 flex-col md:flex-row">
        <div className="w-2/3 flex flex-col p-4">
            <div className="p-1 px-2 bg-purple-200 w-fit text-sm text-purple-500 text-bold font-bold rounded-2xl">
                PDF ASSISTANT
            </div>

            <div className="p-1 px-2">
                <h1 className="text-7xl font-bold">Talk to your</h1>
                <h1 className="text-7xl font-bold text-purple-600">documents.</h1>

                <h1 className="py-6 text-slate-700 text-xl">Upload a PDF and ask questions, summarize content,<br /> find key information, and save time reading through<br /> long documents.</h1>

                <h1 className="py-1 text-slate-700 text-lg">
                    <span className="text-green-600">✓ </span>Summarize long documents
                </h1>
                <h1 className="py-1 text-slate-700 text-lg">
                    <span className="text-green-600">✓ </span>Ask questions about content
                </h1>
                <h1 className="py-1 text-slate-700 text-lg">
                    <span className="text-green-600">✓ </span>Find specific information
                </h1>
                <h1 className="py-1 text-slate-700 text-lg">
                    <span className="text-green-600">✓ </span>Works with research papers, notes, reports and more
                </h1>
            </div>
        </div>

        {/* Desktop image */}
        <div className="relative w-2/4 px-12 mr-34">
            <img 
            src={PdfImg}
            alt="Dashboard image"
            className="w-200 md:mt-12 rounded-2xl shadow-[8px_8px_12px_rgba(79,70,229,0.9)]" />
        </div>
    </div>
  )
}

export default PdfFeature