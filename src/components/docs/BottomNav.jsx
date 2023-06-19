import slugify from 'https://esm.sh/slugify@1.6.6';

export default function BottomNav({next, prev,parent}){
  return(
    <dl className="flex pt-6 mt-6 mb-12 border-t border-slate-400 dark:border-slate-900">
            <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-900 dark:text-slate-500">
                {prev?"Previous":""}
              </dt>

              <dd className="mt-1">
                <a href={prev?(`/docs/${slugify(parent).toLowerCase()}/${slugify(prev).toLowerCase()}`):"#"} className="text-base font-semibold capitalize text-slate-800 dark:text-slate-400 hover:underline">
                  {prev}
                </a>
              </dd>
            </div>

            <div className="ml-auto text-right">
              <dt className="text-sm font-normal tracking-tight text-slate-900 dark:text-slate-500">
                {next?"Next":""}
              </dt>

              <dd className="mt-1">
                <a href={next?(`/docs/${slugify(parent).toLowerCase()}/${slugify(next).toLowerCase()}`):"#"} className="text-base font-semibold capitalize text-slate-800 dark:text-slate-400 hover:underline">
                  {next}
                </a>
              </dd>
            </div>
          </dl>
  )
}
