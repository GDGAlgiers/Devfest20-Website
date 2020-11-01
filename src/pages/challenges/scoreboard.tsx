import { PageProps } from "gatsby"
import React, { ReactElement, useCallback, useReducer } from "react"
import styled from "styled-components"
import { H1 } from "../../components/typography/typography"
import {
  AUTOMATION_PARTICIPANTS,
  ML_PARTICIPANTS,
  MOBILE_PARTICIPANTS,
  ONLINE_SAFETY_PARTICIPANTS,
  WEB_PARTICIPANTS,
} from "../../firebase/firestore/collections"
import { useCollection } from "../../firebase/firestore/hooks"
import Layout from "../../layout/Layout"
import cls from "classnames"
import { customShadow } from "../../components/common/css"
import { WithDotsBackgroundContainer } from "../../components/common/layout/Section"
interface Props {}

interface ScoreboardData {
  name: string
  points: number
  winner?: boolean
}

enum TAB {
  WEB_TAB = "web development",
  MOBILE_TAB = "mobile development",
  ML_TAB = "machine learning",
  AUTOMATION_TAB = "IT automation",
  ONLINE_SAFETY_TAB = "women's online safety",
}

const TABComponent: React.FC<{
  id: TAB
  text: string
  activeTab?: TAB
  onChangeTab: (id: TAB) => void
}> = (props) => {
  const isActive = props.id === props.activeTab
  return (
    <li
      className={cls(
        "cursor-pointer transition-all duration-200 ease-linear flex-1 border-l-2 p-4 font-semibold text-center border-nightBlue bg-yellow",
        {
          "bg-blue": isActive,
          "text-white": isActive,
          "hover:bg-yellow-lighter": !isActive,
          "hover:text-nightBlue": !isActive,
        }
      )}
      onClick={(e) => props.onChangeTab(props.id)}
    >
      {props.text}
    </li>
  )
}

const tabReducer = (
  state: TAB,
  action: { type: string; payload: TAB }
): TAB => {
  const { type, payload } = action
  if (type === "SET" && Object.values(TAB).includes(payload)) {
    return payload
  }
  return state
}

function Scoreboard(props: PageProps<Props>): ReactElement {
  const [webData, webError] = useCollection<ScoreboardData>(WEB_PARTICIPANTS)
  const [mobileData, mobileError] = useCollection<ScoreboardData>(
    MOBILE_PARTICIPANTS
  )
  const [mlData, mlError] = useCollection<ScoreboardData>(ML_PARTICIPANTS)
  const [automationData, automationError] = useCollection<ScoreboardData>(
    AUTOMATION_PARTICIPANTS
  )
  const [onlineSafetyData, onlineSafetyError] = useCollection<ScoreboardData>(
    ONLINE_SAFETY_PARTICIPANTS
  )
  const [currentTab, dispatch] = useReducer(tabReducer, TAB.WEB_TAB)
  /**
   * Gets the corresponding content of the current tab
   */
  const getError = () => {
    switch (currentTab) {
      case TAB.WEB_TAB:
        return webError as Error
      case TAB.MOBILE_TAB:
        return mobileError as Error
      case TAB.ML_TAB:
        return mlError as Error
      case TAB.AUTOMATION_TAB:
        return automationError as Error
      case TAB.ONLINE_SAFETY_TAB:
        return onlineSafetyError as Error
      default:
        return null
    }
  }
  const getScoreboardContent = (): ScoreboardData[] => {
    switch (currentTab) {
      case TAB.WEB_TAB:
        if (webError) break
        return (webData as ScoreboardData[]) ?? []
      case TAB.MOBILE_TAB:
        if (mobileError) break
        return ((mobileData as ScoreboardData[]) as ScoreboardData[]) ?? []
      case TAB.ML_TAB:
        if (mlError) break
        return (mlData as ScoreboardData[]) ?? []
      case TAB.AUTOMATION_TAB:
        if (automationError) break
        return (automationData as ScoreboardData[]) ?? []
      case TAB.ONLINE_SAFETY_TAB:
        if (onlineSafetyError) break
        return (onlineSafetyData as ScoreboardData[]) ?? []
      default:
        return [] as ScoreboardData[]
    }
    return []
  }
  /**
   * Sorts the provided content either in ascending or descending
   * @param content the corresponding content we want to sort
   * @param order the sorting order can be asc or desc
   */
  const sortContent = (content: ScoreboardData[], order: "asc" | "desc") => {
    if (order === "asc")
      return content.sort((item1, item2) => item1.points - item2.points)
    else return content.sort((item1, item2) => item2.points - item1.points)
  }
  /**
   * Switches a tab based on what the user clicked
   */
  const setTab = useCallback(
    (id: TAB) => {
      dispatch({ type: "SET", payload: id })
    },
    [dispatch]
  )
  return (
    <Layout
      seo={{
        title: "Challenge' scoreboard",
      }}
    >
      <WithDotsBackgroundContainer className="min-h-screen bg-nightBlue flex justify-center">
        <Wrapper>
          <Title className="text-yellow font-normal text-center">
            devfest scoreboard
          </Title>
          <ScoreboardWrapper className="md:max-w-5xl mx-auto">
            <TABS>
              <TABComponent
                activeTab={currentTab}
                id={TAB.WEB_TAB}
                text="Web"
                onChangeTab={setTab}
              />
              <TABComponent
                activeTab={currentTab}
                id={TAB.MOBILE_TAB}
                text="Mobile"
                onChangeTab={setTab}
              />
              <TABComponent
                activeTab={currentTab}
                id={TAB.ML_TAB}
                text="Machine learning"
                onChangeTab={setTab}
              />
              <TABComponent
                activeTab={currentTab}
                id={TAB.AUTOMATION_TAB}
                text="IT automation"
                onChangeTab={setTab}
              />
              <TABComponent
                activeTab={currentTab}
                id={TAB.ONLINE_SAFETY_TAB}
                text="Online safety"
                onChangeTab={setTab}
              />
            </TABS>
            <p className="text-yellow-lighter opacity-50 mt-20">
              🛈 scroll to show more
            </p>
            <ScoreboardItems>
              {!getError() &&
                sortContent(getScoreboardContent(), "desc").map((item) => (
                  <>
                    <ScoreboardItem key={item.name}>
                      <div className="text-center flex-1 text-white font-semibold text-2xl">
                        {item.name}
                      </div>
                      <div className="text-center flex-1  text-yellow font-semibold  text-2xl">
                        {(item.points ?? 0) + "pts"}
                      </div>
                      <div style={{ flex: 0.2 }}>
                        {item.winner && (
                          <img
                            title="winner"
                            src={require("../../assets/svgs/winner.svg")}
                            alt="winner"
                            width="50px"
                          />
                        )}
                      </div>
                    </ScoreboardItem>
                  </>
                ))}
            </ScoreboardItems>
          </ScoreboardWrapper>
        </Wrapper>
      </WithDotsBackgroundContainer>
    </Layout>
  )
}

export default Scoreboard

const Wrapper = styled.div.attrs((props) => ({
  className: "overflow-y-hidden pt-32 px-10 md:w-2/3 bg-nightBlue self-start",
}))`
  box-sizing: content-box;
`

const Title = styled(H1)``

const TABS = styled.ul.attrs((props) => ({ className: "flex w-full mt-20" }))`
  ${customShadow}
`
const ScoreboardWrapper = styled.div``

const ScoreboardItems = styled.ul.attrs((props) => ({
  className: "w-full mt-4",
}))`
  max-height: 50vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

const ScoreboardItem = styled.li.attrs((props) => ({
  className: "flex mx-auto border-b-2 border-yellow py-4",
}))``
