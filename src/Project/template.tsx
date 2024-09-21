import IMAGES from "@/Images/Images";

const ComponentName = () => (
  <div className="w-full flex justify-center items-center">
    <div className="flex flex-col pt-2 space-y-8 w-8/12">
      <div className="flex flex-col space-y-2">
        <p className="text-4xl underline">Objective</p>
        <div>
          <p className=" text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            purus sit amet quam rhoncus maximus. Fusce sagittis lectus nec urna
            gravida, non condimentum nisi accumsan. Maecenas a condimentum
            lorem. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Nullam id tellus faucibus, pharetra
            lorem facilisis, dapibus enim. Donec a venenatis enim. Donec
            tincidunt ullamcorper urna, nec elementum ante interdum et. Morbi
            aliquet elit ac lorem scelerisque porta. Morbi molestie ante eros,
            ac convallis mauris mattis eu. Proin convallis ac velit facilisis
            tincidunt. Aenean ac porttitor libero, ac convallis diam. Integer
            sit amet lacus a justo tristique tincidunt a eget mauris. Etiam in
            nunc in tellus ornare tempor in et ante. Morbi fringilla suscipit
            lorem at sagittis. Aenean
          </p>
          <p className=" text-justify">
            Et dolor mi. Ut eget orci eu arcu fermentum bibendum. Suspendisse
            sagittis metus id sem ornare pulvinar. Duis in massa ex. Quisque
            molestie augue quis tellus finibus, id congue mi luctus. Proin eu
            ante sit amet orci facilisis ultricies in vitae nunc. Sed placerat
            mi eu neque interdum, eu gravida risus malesuada. Pellentesque eget
            odio libero.
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-4xl underline">Methodology</p>
        <div>
          <p className=" text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            purus sit amet quam rhoncus maximus. Fusce sagittis lectus nec urna
            gravida, non condimentum nisi accumsan. Maecenas a condimentum
            lorem. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Nullam id tellus faucibus, pharetra
            lorem facilisis, dapibus enim. Donec a venenatis enim. Donec
            tincidunt ullamcorper urna, nec elementum ante interdum et. Morbi
            aliquet elit ac lorem scelerisque porta. Morbi molestie ante eros,
            ac convallis mauris mattis eu. Proin convallis ac velit facilisis
            tincidunt. Aenean ac porttitor libero, ac convallis diam. Integer
            sit amet lacus a justo tristique tincidunt a eget mauris. Etiam in
            nunc in tellus ornare tempor in et ante. Morbi fringilla suscipit
            lorem at sagittis. Aenean
          </p>
          <div className="flex space-x-12">
            <img
              src={IMAGES.mlOnGCP}
              height="200"
              width="400"
              alt="ml-on-gcp-workflow"
            />
            <img
              src={IMAGES.mlOnGCP}
              height="200"
              width="400"
              alt="ml-on-gcp-workflow"
            />
          </div>
          <p className=" text-justify">
            Et dolor mi. Ut eget orci eu arcu fermentum bibendum. Suspendisse
            sagittis metus id sem ornare pulvinar. Duis in massa ex. Quisque
            molestie augue quis tellus finibus, id congue mi luctus. Proin eu
            ante sit amet orci facilisis ultricies in vitae nunc. Sed placerat
            mi eu neque interdum, eu gravida risus malesuada. Pellentesque eget
            odio libero.
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-4xl underline">Results</p>
        <div>
          <p className=" text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            purus sit amet quam rhoncus maximus. Fusce sagittis lectus nec urna
            gravida, non condimentum nisi accumsan. Maecenas a condimentum ac
            convallis mauris mattis eu. Proin convallis ac velit facilisis
            tincidunt. Aenean ac porttitor libero, ac convallis diam. Integer
            sit amet lacus a justo tristique tincidunt a eget mauris. Etiam in
            nunc in tellus ornare tempor in et ante. Morbi fringilla suscipit
            lorem at sagittis. Aenean
          </p>
          <img
            src={IMAGES.accuracyFig}
            height="100"
            width="300"
            alt="accuracy-figure"
          />
          <p className=" text-justify">
            Et dolor mi. Ut eget orci eu arcu fermentum bibendum. Suspendisse
            sagittis metus id sem ornare pulvinar. Duis in massa ex. Quisque
            molestie augue quis tellus finibus, id congue mi luctus. Proin eu
            ante sit amet orci facilisis ultricies in vitae nunc. Sed placerat
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ComponentName;
