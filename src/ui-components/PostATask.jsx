import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { View, Icon, Flex, Text } from '@aws-amplify/ui-react';


export default function PostATask(props) {
  const { overrides, ...rest } = props;

  return (
  <View
    width="983px"
    height="844px"
    display="block"
    position="relative"
    backgroundColor="rgba(255,255,255,1)"
    {...getOverrideProps(overrides, "PostATask")}
    {...rest}
  >
    <Icon
      width="60.98px"
      height="52.95px"
      viewBox={{"minX":0,"minY":0,"width":60.97999954223633,"height":52.94670486450195}}
      paths={[{"d":"M 37.890711812111356 52.52170181274414 C 38.02919049113215 52.76108135282993 38.28511057124623 52.908546447753906 38.562067929287814 52.908546447753906 L 44.592847966994775 52.908546447753906 C 45.18960804610274 52.908546447753906 45.56257649433164 52.26379984617233 45.264196454777654 51.748008728027344 L 23.357659278579433 13.879532814025879 C 23.05927923902545 13.36374169588089 22.313328961326583 13.363741636276245 22.01494895157492 13.879532814025879 L 18.795585188099615 19.44464874267578 C 18.783327339835626 19.465838132426143 18.783325514443607 19.49194456450641 18.79558328075122 19.513134002685547 L 18.799457105339798 19.519826889038086 C 18.824148503300076 19.562509771436453 18.793282996236105 19.615861892700195 18.743899861314173 19.615861892700195 C 18.72097655296356 19.615861892700195 18.699794682567823 19.628069089725614 18.688336895243364 19.647884368896484 L 0.10493937311930215 51.78630828857422 C -0.19330646659375886 52.30209934711456 0.17967829840460225 52.94670486450195 0.7763712626909475 52.94670486450195 L 29.023462479015198 52.94670486450195 C 29.620222558123164 52.94670486450195 29.993196668792606 52.30196964740753 29.69481668884326 51.78617858886719 L 26.80543182695438 46.79147720336914 C 26.666953162834748 46.55209766328335 26.411033067819506 46.404632568359375 26.134075709777925 46.404632568359375 L 11.686672655886579 46.404632568359375 C 11.388292616332595 46.404632568359375 11.201805531195557 46.082263082265854 11.350995550972549 45.82436752319336 L 22.348006313469547 26.814516067504883 C 22.49719633324654 26.55662050843239 22.870170503520615 26.556620478630066 23.019360523297607 26.814516067504883 L 37.890711812111356 52.52170181274414 Z","fillRule":"nonzero"},{"d":"M 26.812834246072185 5.585724830627441 C 26.674355611754873 5.82510432600975 26.674351767255764 6.120029866695404 26.812830431375396 6.359409332275391 L 53.51726243881285 52.52170181274414 C 53.65574110293248 52.76108127832413 53.91166125755236 52.908546447753906 54.18861855598931 52.908546447753906 L 60.203624822476414 52.908546447753906 C 60.80038496118902 52.908546447753906 61.17336485350828 52.263807475566864 60.87498475434966 51.748016357421875 L 31.16304579897186 0.3868427872657776 C 30.86466569981324 -0.12894833087921143 30.118713574370616 -0.12894725799560547 29.820333564618952 0.3868439197540283 L 26.812834246072185 5.585724830627441 Z","fillRule":"nonzero"},{"d":"M37.8907 52.5217 C38.0292 52.7611 38.2851 52.9085 38.5621 52.9085 L44.5928 52.9085 C45.1896 52.9085 45.5626 52.2638 45.2642 51.748 L23.3577 13.8795 C23.0593 13.3637 22.3133 13.3637 22.0149 13.8795 L18.7956 19.4446 C18.7833 19.4658 18.7833 19.4919 18.7956 19.5131 L18.7995 19.5198 C18.8241 19.5625 18.7933 19.6159 18.7439 19.6159 C18.721 19.6159 18.6998 19.6281 18.6883 19.6479 L0.104939 51.7863 C-0.193306 52.3021 0.179678 52.9467 0.776371 52.9467 L29.0235 52.9467 C29.6202 52.9467 29.9932 52.302 29.6948 51.7862 L26.8054 46.7915 C26.667 46.5521 26.411 46.4046 26.1341 46.4046 L11.6867 46.4046 C11.3883 46.4046 11.2018 46.0823 11.351 45.8244 L22.348 26.8145 C22.4972 26.5566 22.8702 26.5566 23.0194 26.8145 L37.8907 52.5217 Z","fill":"rgba(64,170,191,1)","fillRule":"nonzero"},{"d":"M26.8128 5.58572 C26.6744 5.8251 26.6744 6.12003 26.8128 6.35941 L53.5173 52.5217 C53.6557 52.7611 53.9117 52.9085 54.1886 52.9085 L60.2036 52.9085 C60.8004 52.9085 61.1734 52.2638 60.875 51.748 L31.163 0.386843 C30.8647 -0.128948 30.1187 -0.128947 29.8203 0.386844 L26.8128 5.58572 Z","fill":"rgba(64,170,191,1)","fillRule":"nonzero"}]}
      display="block"
      position="absolute"
      top="40px"
      left="343px"
      {...getOverrideProps(overrides, "Union")}
    />
    <Flex
      gap="24px"
      direction="column"
      width="823px"
      height="713px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="absolute"
      top="99px"
      left="80px"
      borderRadius="8px"
      padding="32px 32px 32px 32px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "ContactUs")}
    >
      <Flex
        gap="24px"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "Frame 42838992911")}
      >
        <Flex
          gap="8px"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          {...getOverrideProps(overrides, "TextField38992967")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            whiteSpace="pre-wrap"
            {...getOverrideProps(overrides, "label38992968")}
          >
            Full name
          </Text>
          <Flex
            gap="0"
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            {...getOverrideProps(overrides, "InputGroup38992970")}
          >
            <Flex
              gap="10px"
              direction="column"
              height="42px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              border="1px SOLID rgba(137,148,159,1)"
              borderRadius="5px"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Input38992971")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(128,128,128,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                whiteSpace="pre-wrap"
                {...getOverrideProps(overrides, "placeholder38992972")}
              >
                <undefined
                  {...getOverrideProps(overrides, "undefined")} />
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="8px"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          {...getOverrideProps(overrides, "TextField38992974")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            whiteSpace="pre-wrap"
            {...getOverrideProps(overrides, "label38992975")}
          >
            Contact information* 
          </Text>
          <Flex
            gap="0"
            direction="column"
            height="40px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            {...getOverrideProps(overrides, "InputGroup38992977")}
          >
            <Flex
              gap="10px"
              direction="column"
              height="42px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              border="1px SOLID rgba(137,148,159,1)"
              borderRadius="5px"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Input38992978")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(128,128,128,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                whiteSpace="pre-wrap"
                {...getOverrideProps(overrides, "placeholder38992979")}
              >
                <undefined
                  {...getOverrideProps(overrides, "undefined")} />
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "TextField38992981")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          whiteSpace="pre-wrap"
          {...getOverrideProps(overrides, "label38992982")}
        >
          Address
        </Text>
        <Flex
          gap="0"
          direction="column"
          height="40px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "InputGroup38992984")}
        >
          <Flex
            gap="10px"
            direction="column"
            height="42px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            border="1px SOLID rgba(137,148,159,1)"
            borderRadius="5px"
            padding="8px 16px 8px 16px"
            {...getOverrideProps(overrides, "Input38992985")}
          />
        </Flex>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "TextAreaField")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          whiteSpace="pre-wrap"
          {...getOverrideProps(overrides, "label38992989")}
        >
          Task Description (Include items the student must bring if any)
        </Text>
        <Flex
          gap="0"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "InputGroup38992991")}
        >
          <Flex
            gap="10px"
            direction="row"
            height="108px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            border="1px SOLID rgba(174,179,183,1)"
            borderRadius="5px"
            padding="8px 16px 8px 16px"
            {...getOverrideProps(overrides, "Input38992992")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(128,128,128,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              whiteSpace="pre-wrap"
              {...getOverrideProps(overrides, "placeholder38992993")}
            >
              <undefined
                {...getOverrideProps(overrides, "undefined")} />
            </Text>
          </Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "Frame 42838993034")}
        >
          <Flex
            gap="8px"
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            {...getOverrideProps(overrides, "TextField38993035")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="30px"
              textAlign="left"
              display="block"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              whiteSpace="pre-wrap"
              {...getOverrideProps(overrides, "label38993036")}
            >
              Payment for completed task
            </Text>
            <Flex
              gap="0"
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              {...getOverrideProps(overrides, "InputGroup38993038")}
            >
              <Flex
                gap="10px"
                direction="column"
                height="42px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                border="1px SOLID rgba(137,148,159,1)"
                borderRadius="5px"
                padding="8px 16px 8px 16px"
                {...getOverrideProps(overrides, "Input38993039")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(128,128,128,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  whiteSpace="pre-wrap"
                  {...getOverrideProps(overrides, "placeholder38993040")}
                >
                  <undefined
                    {...getOverrideProps(overrides, "undefined")} />
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="8px"
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            {...getOverrideProps(overrides, "TextField38993042")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="30px"
              textAlign="left"
              display="block"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              whiteSpace="pre-wrap"
              {...getOverrideProps(overrides, "label38993043")}
            >
              Estimated time duration
            </Text>
            <Flex
              gap="0"
              direction="column"
              height="40px"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              {...getOverrideProps(overrides, "InputGroup38993045")}
            >
              <Flex
                gap="10px"
                direction="column"
                height="42px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                border="1px SOLID rgba(137,148,159,1)"
                borderRadius="5px"
                padding="8px 16px 8px 16px"
                {...getOverrideProps(overrides, "Input38993046")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(128,128,128,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  whiteSpace="pre-wrap"
                  {...getOverrideProps(overrides, "placeholder38993047")}
                >
                  <undefined
                    {...getOverrideProps(overrides, "undefined")} />
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "TextField38993050")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          whiteSpace="pre-wrap"
          {...getOverrideProps(overrides, "label38993051")}
        >
          (OPTIONAL) Time window
        </Text>
        <Flex
          gap="0"
          direction="column"
          height="40px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "InputGroup38993053")}
        >
          <Flex
            gap="10px"
            direction="column"
            height="42px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            border="1px SOLID rgba(137,148,159,1)"
            borderRadius="5px"
            padding="8px 16px 8px 16px"
            {...getOverrideProps(overrides, "Input38993054")}
          />
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(0,0,0,0)"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(4,125,149,1)"
        {...getOverrideProps(overrides, "Button")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          shrink="0"
          position="relative"
          whiteSpace="pre-wrap"
          {...getOverrideProps(overrides, "label38993018")}
        >
          Post Task
        </Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="center"
        display="block"
        width="756px"
        height="36px"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
        {...getOverrideProps(overrides, "*We will not send promotional emails or texts")}
      >
        *We will not send promotional emails or texts 
      </Text>
    </Flex>
    <Text
      fontFamily="Inter"
      fontSize="40px"
      fontWeight="400"
      color="rgba(0,0,0,1)"
      lineHeight="60px"
      textAlign="left"
      display="block"
      width="386px"
      height="59px"
      position="absolute"
      top="40px"
      left="421px"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "TaskMatch")}
    >
      TaskMatch
    </Text>
  </View>
  )
}
