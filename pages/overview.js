import Link from 'next/link'


export default function About() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4 bg-green-100">
            <h1 className="text-4xl">Overview Complete</h1>
            <Link href="/">
                <a className="bg-gray-100 px-3 py-1.5 rounded-lg">Back to Home</a>
            </Link>
            <iframe src="https://giphy.com/embed/cXblnKXr2BQOaYnTni" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/theoffice-the-office-tv-moroccan-christmas-cXblnKXr2BQOaYnTni"></a></p>
        </div>
    );
}