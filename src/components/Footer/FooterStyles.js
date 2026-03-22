import styled from "styled-components"

export const FooterWrapper = styled.section`
	width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`

export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: ${props => props.theme.colors.textMuted};
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: ${props => props.theme.colors.primary1};
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 8px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`

export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`

export const CompanyContainer = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`


export const Slogan = styled.p`
	color: ${props => props.theme.colors.textSubtle};
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;

	@media ${props => props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`


export const LinkList = styled.ul`
	border-top: 1px solid ${props => props.theme.colors.borderSubtle};
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 40px 0 28px;

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: ${props => props.theme.colors.textFaint};
	margin-bottom: 16px;

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`

export const CopyrightBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 0.35rem;
	padding: 1.25rem 0 0;
	margin-top: 1.5rem;
	border-top: 1px solid ${props => props.theme.colors.borderSubtle};
	font-size: 13px;
	letter-spacing: 0.02em;
	color: ${props => props.theme.colors.textMuted};
	text-align: center;

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 11px;
		padding: 1rem 0 0;
		margin-top: 1rem;
	}
`

export const CopyrightText = styled.span`
	opacity: 0.9;
`

export const CopyrightDivider = styled.span`
	opacity: 0.5;
	user-select: none;
`

export const TechBadge = styled.span`
	color: ${props => props.azure ? '#0078d4' : props.theme.colors.primary1};
	font-weight: ${props => props.azure ? '600' : '500'};
	opacity: 0.95;
	display: inline-flex;
	align-items: center;
	gap: 0.3rem;
	${props => props.azure && `
		background: rgba(0, 120, 212, 0.1);
		border: 1px solid rgba(0, 120, 212, 0.3);
		border-radius: 4px;
		padding: 2px 8px;
		font-size: 12px;
	`}
`
