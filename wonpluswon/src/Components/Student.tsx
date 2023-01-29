import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src}  mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our student Speak</Heading>
          <Text>We have been working with studnet around the country</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
              Can’t express the amount of respect to all the members in this platform who are working
               so hard for us. We are so blessed to have this lovely platform in our generation!
                                    
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AvQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAgMFBgcBAAj/xABIEAACAQMCAwQHAwcHDQEAAAABAgMABBEFIQYSMRNBUWEHFCIycYGRQqHBFRYjUrHR8DNDYoOSk+FFU1RVZHKClKKywtLxJP/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/xAApEQACAgEEAQMEAgMAAAAAAAABAgADEQQSITFBEyJRBRQyYUKBFSNi/9oADAMBAAIRAxEAPwC3tAVOStAaxFm0OB3GrG0BIyQRQ1xaCaMqRQnX2mO1WDcJl8sRz0Neiibm6Gr0+hx+H3V5dFj39kVm8zY47gHDUGVqeltlzuRQlnZvBKRH0+FFzRyIcvTda5SZ9zAWYiRAg7672MffQ8k6oNyaHm1WGP2Q2TVWAE4AnqHPFGvQ0ghB31GDUlkOAa60+3fXBQZHUObl8a6vKBnNd0vTpdQBYPyKPGphOF377v8A6P8AGriuDa0CQkjp40O8oo/VtLewKktzqds4qHZwWIwanZicHz1HWlHjTRm86SxwOlKjtZZghVAvO2FL7DpVlxIJiRNnpXRLn7NFSW+moiNJdumWGQOXfz33oea3kgjMsUi3cIblbs0w8fmwzv8AKijHmDLRJfJ6V2NWkyFG3fS4ojIAw3Trle+jobN5BhSAPIUZcGDLSHuUWM7NtQjzKB3VIazp08MbSKeYgZwBVRuLqZSQYn+lVfAl1aTT3SqMrj602dQA2yv1onglLC9uXXUYAzD3RJ0xV7/JfDi7G1sAe/IWgnBljZiSK7qAUNOlU5D7NSPYDwpMtuvIfZ7qMRxFFODmQEoG9IVRXbhuV2XwOKaR96zG7m2oJWSNhEgYkjfNd1eJHhIxv3HwojSkDJmnNTi/QM2OlaCfgJk2n/YZQdUsppUZLcH41BnQ7vOSD1rSbaFG6rT7W0fhSlle5sx+i8IuDM80nTn9cKOu4qytpagDIFEtAsWoZA60fPjlG1ErTiK6h/fxALLnswex6eBFPS69JAcSMg+K0bAgMeyjFBXvDsWoMGlZh/unFH2EDgxUn5gV1qsF3/LSA+A7q5Bp8MwEgA38KVJwPY45g0vMOntmjbGD1Udjv7O29VKN5Mup44kbqlnb2dm08oIRepFUK61641Ob1W1ULDH0JOD3jr/HWr/xg7y6SbKIBpLp1iQHbJP4YyahNG4bt9KgWSVxPIVAPKQVU43oFriuMUoXHMoM949nIwuYM3BIPNzZCb/fUno+utEOdZWIDFuRQSCT4mrhc6dY3jBHtkPyrPuK9Gl0i5MqIy2pOBjOPrVKrw5xCWUlOZovCMsOs2twYukEvKEK4KggHGPjmrLHp7R+5tVR9D5eeK5lVcDJRz1zsuPx+tab2PlTygeYi55lV1q3aOzd26KMmswvddskkZSBkGtr1q2WSwmUj3oyPur5u1a35bmXb7VBvUEiEr/GSsmuWn2RUHfahDLNzLGKj3yKYZsGhgYlp9jVw+fShtPvodQs4bu2bmimUMhO2xohiMHNNReVLVGC3s6p05qEjk3617X5uwmuJME752qA0XV3vnIEbrg964rLf8zN+oj0xNJ0hf8A8+fOibwA2suQPdqO025EVoCwPTNBHWnuzIixlQCR061pIfaJi2g+oY9B7PlTvP50BBM/MQ4OKYv7qSIfo0LHIpd2AMaqTcITOubkGnZxlR4UCksje2yEGi2kZ1G3SiJYmO4G1G3dSRtUVYtht50ZF02qOhuOWLFOQ3iAZJH1o29PmL7G+JIkeyahbhcXT0eb+Dl3kUH41Ez3HazsyHaqNYgHJl1Rieoi8tllVHY4Mb8ynHfgj8aznUV1mDX+wtrNmBbAmhbHMvi3ccD41o11bytYzXLyrDDHGz879DgZ+Q86qOl6ty6jI932gWJPdVSc57846daS1P5AgcGPaYZU88wPiDVbjQkSRwy5OD+iL/jtTltcprWm3HrjG4tQhL9rCqqNs7GjtW1PT7qKJ+0V4g2G5zgH4Hvpm+kGraZNo+k80ck0RQOiZEYI3J6ftpRSAdsaYEjJlo9GujppHC9ugXDzEyse856fdirb3VX9BnbTtCsbbUJlM9vCkUshOAzAYzv44zUgNXssZ9Yi/titpOVGJivkMciO6kAbSTP6pr5212MC5lIH2q2XWOM9JhjlUXcbMgIKqQd/Cs7j0VdSQzyZAfeg6phWBuhqELZxM5uVwaCYb1prcGW7dRn50y3BFtn3R9aV+6SH+3eaLw9dT6fZrbK4MadAe74U/qGvXdqpeRAwOwqD098j2WJJ+6nNduP0cSYzvmsy7Xui7FbkR1dIhfOO41Pqrzkl0PtdaTBc9mcpHihomBG4Gae5ttgKx21dxOcx301HUkxrM/ZcnJt8aFjvnjfnUEE9RmhOY0h222qfvNQf5Svop5EnRe3Etq0wAAUE/SgH1O4fqopAnKaUwz1B2oJZBgZO9WuvsIHMhalHiSDandYwAuK4NSvMY2oRWNdDGl/Ws+ZfYvxCfyjd/rAfKi9Ke8v5mjDDPcMVFlvOrfwzZeq2BunH6WfceSd316099Ors1NwUnjzFtU60158x+10SKFA95M80ngp5VH40ZIltbwF0iQH7ORuTSJJjyvk9CaHucuyqxwiZJz3bV7CvTVVjAE8/Ze79mC8dSFODNaK+96hKB80NZ5Z6lBc2ih3MEvKMFTju8RWhcQz22qWF5pFvMGlmiaMlRkLzbbmsnuLE2bmJ8rKjFHQfZIpPXEjEf0J7her3iRxqBMbmfHsGR+cJ+6rjwM6yafczJykdvgFTnI5VOT57mso1yZ7dSAGxjJPgK1T0daS2kcNWsUintJCZZM9xbfFArrLIWh7bQDt+YbxFa+vafNblGdOrcozjzrKdWsBauyxBsDYACt0tisV03J1ZdvjQuv8ADlpqNlI6wxpdopZHVAC2O4gU/plHpxO6zD4nz4mn3L3IdkcIDncVoFnrVtbWSozAHlAwTQ99cwLZnljAb/CqBqEvM7tz99Vv04cCFpfbmaV+cdmOrr9aQeJLQHZgayeGU9p7TbGrVZRWAgVp5QC3QfwKW+xEYru3+ZY+FuKYtQPKiOAp3JFWK7aC5ILzDONsVjur60o1a7OkAR2zOQnKcZHyojTINY1GLnjc482NKv8AR62beDiTXrH6xkzSr6e3s4eZJeY0ANVcgHB38aqyaLrq98Z+LGrDw5+U7G4U6jBFNCOvLufvp7S6LS0Id6bjB2nWWt7cgQn8pv3CnbbVjGxEkTMD1KirEmr6eCM6cQD1PIKIbiDh+CMNKY0PgwAo5s0oGBTBNTqV5ZzK9+ULEqe1kKL1OT0pA1TRici6U48GqO4r420yVHtdPsjIWGC/LgCorgfXNKsLt4tRgVRI2zEdKw3+njBfbiNjUHgZlsXWdIA2n/bSTr2jqfamA+Zqbl1vhiNT+mtSxGQoxk1VlS31nVBFaW0ZaVvZOB08apT9Prc+4Yhld36MndCu9N1rVIrG1bndgWYDuUdf3fMVoE7hVCqMKBgADpVZ4U0CPRLua6l7IyvH2a9mp2Gcnu8hU/NIkgwGb+z1rZ0Wno0wO09zK1jWWNjvEGM3POFAyC4B+Qzn76dly0UxKcw5eXH6xNMwQ8lwsruW5VbouMscb/QUWrxhQCHJBydutPeqnzERU/xArDRfVIzIXDTSHLDGwofWuG7HVpFmuEeKcLy9rEcEjzHfU2bqMj3W+lJMiN1V/kBQbDW/cZrDp1KJe8NaPpLrdTdtdyx4KrKdic7YUbfXNc0WyvrLUxcG4dEuMPcQ8+VYkfqnoQcb1b9QtVukRIm7MK2TlObI+vlXhp8JbmJbPdt0rh6QrKrKt6rWBjBg4EobwOdqm7aVpBz4Kjrgn+PpUTd2fZRGRXJA67VI2TyG3jckYI7gaDo8rlGhtXhsMsoWs8GXc0912DxiJpGZB4Ak4qoycA6gkjB4Q656qauWsca6lbcT3WjQWCExMOVy3vAgHP30Q19rrrzdjCMjOMmmM35yq5EpuqC4Y4mctwXPG/twsAPKhLvhyRXAEYrQ9K1m81Dt4r2OON425QAetPPppZskZNP1e8e8YMTsyh9pzINPQjYoQfytdbd3KtWSz4EjsrdYYrp8L38o3pV16Q7KRVj0W1lv7hhzbezGg8Wbu+FRNzxRxYVMifkWBcbqwdsfPIrGO5hwZsUeqnuQSa/NH/bJPoKiOI7fRuG7U3Gq6q0e+FjVcu58gKin9IupRNFaXioJpjyiSGEopP8ARyT9aq2sT3N1cSSXx0K5yfZ7dXkZB5EEVZam/kYQavUPnZNPseGbPUbOG8tL95LedA8bgdQRmkXfo8tLtlaW7mJXpsKofCvFeq6fanS9Ontlw+I2miLRDyXfIFWaHi3i+3Je4g0m+T/Nw80bfLJNQanU8GVF99ykd47hsfow05JS5u52J7jimbj0UaVO2Xurn5EUXF6TNHaBGuYbiCXPK8RXJRvM01J6WOG4zjtJSfKM0uxsz5gy/G04jKeifSBOs3rN1zqMA8wqd0jg600q+ju4ZpXaPIAbzGKg29L3DQ2zOf6s0bonpM0TWtVttOtFuO3uG5ULRkDOCfwqM2H5kK+wEKRzLlyjwFe5fKlCvVE6I5a7gUo1yunT3LXQK9XamdPYrorldFWBlZyaNZoeSTPKSM4OKeQKqKsYAA6ADp4UxcTLBAZHIC53Jr1rcdrkcpC95br9KfpxjMUtJ6mbR6c03GV5dTSl5SSSW/jwxVouJ1trcs/cMfGog4Ti2/VTtk9aH1+9HaiIHZBlq0LWCV5EroqPXvCnqN3OqWltcRtOoAZx7oyd6sec7gYB36YrL9KaTW+LoYM5t4D2j48ulad8KFplwu4+Yb6larXbE6EznSE9S0mFQVTtFEkjk4ySK5fOl3bvE7O0ci4bBxn4GkXEeZRzcx6BCDsK5KHL4VHONvdNLqijkwtmstZdi8D9SJu9LWbk5Lp+eP3TMvNj57Gk6bozyXBGoXkIix70aEftqUNtMf5mQ/BTS7bTL66uI4La2laSQ4VSpH3noKudsVDMvRkU2k2un3K3B1NEJbKJIuPlmpu1vAwXLgqc+0rZFF3nAGrXKgCa3UjoyykEfdigLb0e8TWs6mK5smiz7QLY5voMVz0sw4EY0mr9GzJ6Mh9dvIhqDCJAQyZfKjfGwPxwaDGrrJHJGbaPAHXkq4D0darLeCaa4s1Tl5cczE/sqQtPR0YC/a3UDc2eiNRKq3294gdTZW1pI5mULKHmQCFfez7taZ6Nn/KGv28awxottG0pYKATggD/ALvuoqD0fRWMjXVxPDOiDPZiMj8amtAT1HV4TDol9EGJjaT1dgqg95OOmwodzGs4J7l6alsTdnqXivZrhPhXOYCsbMZEVXqSWFc567dOxF17NI5xXOcV26TiO5r2aa56UGqQ0jEVModFDDI5s0iE/b7zuaav7uK1gV5XVATgEnFBQ6pFLkW/NLvtyISPrjFP02KE5MVsRi3Ald1O3zxpcPEcBolLDzx/8qmcRXbR3l9ykssZwzdwPhWgnR759SmvOaL21IHMTnP0qLl4Qvn4dvbETWvrt25Z5H5uUZPw7qcsvoZNu6V0rXUWFgsrnoqtle2u787yTPgN4KMir6VqP4Q4Sm4fsPVWuIn81Bqf9QbvdfkKldVQABugGptZiSJIFF8B9K9yLSq8awDNOJKLjupGoyixtlHJMzS7ExRM/KP+EUs0hbZwTy3Dj5Ci6ewVvuIzKWLuGMyJF9H3RXf/ACkv/rXWv4x0hvD8LOU/+NS4gkGwuZPkBXmtiffmkb44rU/yP/MW+2/chxehj7FrfH42ci/tFERtLJ0tpwPFlC/tNH+ppjct937qQdNib7cg+BA/CqH6ifAk/bL8wO9tpHtmUY5zj2c57x4ZqSixyde6hV0qBZhJ2lyxQ5Aa4fH0zii8ADHdSN+oa5gSOoeusIMCA3F9FATzMBv40FJrVup/lR9a7e8M6XdyM88BYtufbb99AngrQepss/1jfvrOJOeY0NviPtxBbD+cFNtxFbD+dH1pK8FaB/oC/Nj++lfmXw//AKthPxzUf2ZOR8RJ4kth/Oj6ik/nLak/y6/2hTv5m8Pj/Jdv9KWvCehL00u22/oVPP7k7hGBxLZZ9q4j+binouI7Bjtdw/3gp1eGtFTpplt/diiItD0yPdLC2GPCMVIzIJEkLGaK7i542WRe4qciixGvhTFrDFCnLEiovgowKJFPVAYGYs/fEZdQD0psopG4p5zvSDVHAzJB4iOndSvlXa9VJM//2Q=='
              }
              name={'Aarti shukla'}
              title={'IIT Jee topper  Air 20'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Learning</TestimonialHeading>
              <TestimonialText>
              It was a great experience for me because I was a dropper and had only wonpluswon
               as a source for my coaching. I love Avnish sir since because of him I cleared the 
               exam with good marks and also made my family proud. My experience with wonpluswon was 
               full of learning and grooming.
                                    
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://media.gettyimages.com/id/1134576923/photo/teeanger-boy-stock-images.jpg?s=612x612&w=gi&k=20&c=M1-X-AVI-aKQt24SiA7EXGphB4FcmO1L_D32FPFOnSI='
              }
              name={'Shivansh Tiwari'}
              title={'GATE Tooper Air 8'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Understanding</TestimonialHeading>
              <TestimonialText>
              I’ve been a part of the wonpluswon Family since Vishal sir started uploading videos to YouTube. 
              I love the way Vishal sir teaches, and I attribute everything I’ve accomplished to Vishal sir’s
               videos because with wonpluswon I have excelled in my interpersonal and academic skills.
                                    
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1604177091072-b7b677a077f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwc3R1ZGVudHxlbnwwfHwwfHw%3D&w=1000&q=80'
              }
              name={'Shivam Arora'}
              title={'CA Topper Air 1'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}


