import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type RowData,
} from '@tanstack/react-table'
import {
  HeaderCell,
  HeaderGroup,
  HeaderRow,
  TableContainer,
  StyledTable,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  FooterCell,
  MainTable,
  ButtonActions,
  TableFooterRow,
} from './styles'
import Button from '../Button'
import type { ButtonVariant } from '../../types/component'
import { type IconNames } from '../../assets/icons/iconTypes'
import { css } from '@emotion/css'
import { useMemo } from 'react'

// Generic table data interface for standardized API responses
interface TableData<TData extends RowData> {
  content?: TData[]
  totalPages?: number
  totalElements?: number
  size?: number
  number?: number
  first?: boolean
  last?: boolean
  empty?: boolean
}


interface TableProps<TData extends RowData> {
  data: TableData<TData>;
  columns: ColumnDef<TData>[]
  page: number
  pageSize: number
  buttonActions?: {
    label: string
    handleClick: () => void
    icon?: IconNames
    variant?: ButtonVariant
    className?: string
  }[]
  handlePageChange?: (page: number) => void
  components?: React.ReactNode
  selectedItems?: number[]
}

const Table = <TData extends RowData>({
  data,
  columns,
  page,
  pageSize,
  buttonActions,
  handlePageChange,
  components,
  selectedItems
}: TableProps<TData>) => {

  const totalPages = useMemo(() => data?.totalPages
    ?? Math.max(1, Math.ceil((data?.content?.length ?? 0) / pageSize)), [data?.totalPages, data?.content?.length, pageSize])

  const table = useReactTable({
    data: data?.content || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: { pageIndex: page, pageSize: pageSize },
    },
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <MainTable data-table-root>
          <ButtonActions>
            {buttonActions?.map(option => (
              <Button
                className={css(option.className,  css({
                    width: 'fit-content !important',
                    '& svg path': { fill: 'none !important' },
                  }))}
                iconName={option.icon}
                iconPosition='left'
                key={option.label}
                handleClick={option.handleClick}
                variant={(option.variant as ButtonVariant) || 'primary'}
                type='button'
              >
                {option.label}
              </Button>
            ))}
          </ButtonActions>
        {components}
          <TableContainer data-table-container>
            <StyledTable>
              <colgroup>
                {table.getFlatHeaders().map(header => (
                  <col
                    key={header.id}
                    style={{
                      width: header.getSize(),
                    }}
                  />
                ))}
              </colgroup>
              <HeaderGroup>
                {table.getHeaderGroups().map(headerGroup => (
                  <HeaderRow key={headerGroup.id} data-table-header-row>
                    {headerGroup.headers.map(header => (
                      <HeaderCell key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </HeaderCell>
                    ))}
                  </HeaderRow>
                ))}
              </HeaderGroup>
              <TableBody>
                {table.getRowModel().rows?.map((row, index) => (
                  <TableRow key={row.id + '_' + index} data-table-row>
                    {row.getVisibleCells()?.map(cell => {
                      return (
                        <TableCell
                          title={`${typeof cell.getValue() === 'string' ? cell.getValue() : ''}`}
                          key={cell.id}
                          columnHeader={
                            typeof cell.column.columnDef.header === 'string'
                              ? cell.column.columnDef.header
                              : undefined
                          }
                          isSelected={selectedItems?.includes(
                            (row.original as { id?: number })?.id ?? 0
                          )}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
            <TableFooter>
              <TableFooterRow data-table-footer-row>
                <FooterCell>
                  Rows: {table.getRowModel().rows?.length}
                </FooterCell>
                {totalPages >= 1 ? (
                  <FooterCell>
                    Page {page + 1} of {totalPages}
                  </FooterCell>
                ) : null}
              </TableFooterRow>
            </TableFooter>
          </TableContainer>
      {(data?.content?.length ?? 0) > pageSize && (
        <div
          data-table-pagination
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 16px;
            margin-top: 8px;
            padding-top: 16px;

            @media only screen and (max-width: 768px) {
              display: none;
            }
          `}
        >
          <Button
            variant='secondary'
            type='button'
            handleClick={() => handlePageChange?.(page - 1)}
            disabled={page === 0}
            className={css`
              padding: 8px 12px !important;
              height: auto !important;
              line-height: 20px !important;
              & svg  {
              width: 8px !important;
              height: 8px !important;
            }
            `}
            iconName='caretLeft'
            iconPosition='left'
          >
            Back
          </Button>

          <div
            className={css`
              display: flex;
              gap: 8px;
              align-items: center;
            `}
          >
            {(() => {
              const totalPages = data?.totalPages || 1
              const maxButtons = 5
              const currentPage = page

              // Calculate the range of pages to show
              let startPage = Math.max(
                0,
                currentPage - Math.floor(maxButtons / 2)
              )
              const endPage = Math.min(totalPages - 1, startPage + maxButtons - 1)

              // Adjust start page if we're near the end
              if (endPage - startPage < maxButtons - 1) {
                startPage = Math.max(0, endPage - maxButtons + 1)
              }

              const pages = []
              for (let i = startPage; i <= endPage; i++) {
                pages.push(i)
              }

              return pages.map(pageNumber => (
                <Button
                  key={pageNumber}
                  variant={page === pageNumber ? 'primary' : 'secondary'}
                  type='button'
                  handleClick={() => handlePageChange?.(pageNumber)}
                  className={css`
                    padding: 8px 12px !important;
                    height: auto !important;
                    line-height: 20px !important;
                  `}
                >
                  {pageNumber + 1}
                </Button>
              ))
            })()}
          </div>

          <Button
            variant='secondary'
            type='button'
            handleClick={() => handlePageChange?.(page + 1)}
            disabled={
              page >= totalPages - 1
            }
            className={css`
              padding: 8px 12px !important;
              height: auto !important;
              line-height: 20px !important;
               & svg  {
              width: 8px !important;
              height: 8px !important;
            }
            `}
            iconName='caretRight'
          >
            Next
          </Button>
        </div>
      )}
    </MainTable>
  )
}

export default Table
