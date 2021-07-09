export default function CookieStandFooter(props) {
    return (
        <footer className="px-8 py-6 bg-green-500">
        <p>&copy; 2021</p>
        <p>{props.reports.length} Locations Worldwide</p>
      </footer>
    )
  }