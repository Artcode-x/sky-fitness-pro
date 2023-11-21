import styled, { css } from 'styled-components'

export const Center = css`
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
`

export const Body = styled.div`
  ${Center}

  background-color: #271a58;
`

export const СoursesList = styled.ul`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
`
