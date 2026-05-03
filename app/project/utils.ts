import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  summary: string
  cardDescription: string
  publishedAt: string
  category: string
  coverImage: string
  role: string
  year: string
  team: string
  platform: string
  releaseYear: string
  status: string
  glanceTitle: string
  glanceSummary: string
  problem: string
  problemLink: string
  solution: string
  solutionLink: string
  impact: string
  impactLink: string
  featured: boolean
  order: number
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let rawKey = key.trim() as keyof Metadata
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1')

    if (rawKey === 'featured') {
      ;(metadata as Metadata).featured = value === 'true'
    } else if (rawKey === 'order') {
      ;(metadata as Metadata).order = Number(value)
    } else {
      ;(metadata as any)[rawKey] = value
    }
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))
    return { metadata, slug, content }
  })
}

export function getProjects() {
  return getMDXData(path.join(process.cwd(), 'app', 'project', 'projects'))
}
