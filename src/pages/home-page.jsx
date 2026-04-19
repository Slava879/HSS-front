import {NavLink} from 'react-router-dom'
import {Card} from '../components/post-card/post-card'
import s from './home-page.module.scss'
import {usePosts} from '../hooks/usePosts'
import {Paginator} from '../components/paginator'
import { useState } from 'react'

const MIN_PAGE = 1
const ITEMS_COUNT = 10

export const HomePage = () => {
	const [currentPage,
		setCurrentPage] = useState(MIN_PAGE)
    const {data, isFetched} = usePosts({
		limit: ITEMS_COUNT,
		offset: (currentPage - MIN_PAGE) * ITEMS_COUNT
  })

  const { pages: pageCount, currentPage: apicurrentPage, data: posts } = data || {};

  return (
    <div className={s.page}>
      <div className={s.shell}>
        <header className={s.topbar}>
          <div className={s.brand}>
            <span className={s.brandMark}>∞</span>
            <span>enjooy</span>
          </div>

          <nav className={s.nav}>
            <NavLink className={`${s.navLink} ${s.navLinkActive}`} to="/">
              Home
            </NavLink>
            <NavLink className={s.navLink} to="/">
              Blog
            </NavLink>
            <NavLink className={s.navLink} to="/">
              Service
            </NavLink>
            <NavLink className={s.navLink} to="/">
              About
            </NavLink>
            <NavLink className={s.navLink} to="/">
              Contact
            </NavLink>
          </nav>

          <div className={s.actions}>
            <button className={s.ghostButton} type="button">
              Sign in
            </button>
            <button className={s.primaryButton} type="button">
              Register
            </button>
          </div>
        </header>
        <div className={s.content}>
          <main>
            <div className={s.sectionHeader}>
              <h2>Whiteboards are remarkable.</h2>
              <div className={s.line}/>
            </div>

            <div className={s.grid}>
							{isFetched ? posts?.map?.((el) => (
                <Card key={el.id} post={el}/>
                )) : "Loading..."}

						</div>
            <Paginator
              currentPage={apicurrentPage}
              setCurrentPage={setCurrentPage}
              pageCount={pageCount}
              MIN_PAGE={MIN_PAGE}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
