import styles from './SearchBar.module.css'
import { toast } from "react-hot-toast";

type SearchProp= {
  onSubmit: (query: string) => void;
}
export default function SearchBar({ onSubmit }: SearchProp) {
  function handleSubmit(formData: FormData): void {
    const query = formData.get('query') as string;
    const value = query?.trim() || '';

    if (value === "") {
    toast.error("Please enter your search query.", {
    position: "top-center",
});
      return;
    }

    onSubmit(value);
    
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form action={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
